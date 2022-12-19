import { Point, sign } from '@noble/secp256k1'
import { wasm as wasm_tester } from 'circom_tester'
import { buildPoseidon } from 'circomlibjs'
import { BigNumber, utils } from 'ethers'
import { join } from 'path'

import {
  bigintToArray,
  bigintToUint8Array,
  uint8ArrayToBigint,
} from './helpers'

jest.setTimeout(1_000_000)

describe('Poseidon Merkle Tree', function () {
  let poseidon
  let F
  let circuit

  beforeAll(async () => {
    const p = join(__dirname, 'merkle_tree_test.circom')
    circuit = await wasm_tester(p)
    poseidon = await buildPoseidon()
    F = poseidon.F // TODO: do we actually need this or is it the default field?
  })

  it('Should check membership in a depth 2 merkle tree', async () => {
    // merkle
    const root = F.toObject(poseidon([poseidon([0, 1]), poseidon([2, 3])]))
    const pathElements = [0, F.toObject(poseidon([2, 3]))]
    const pathIndices = [1, 0]
    const leaf = 1

    const w = await circuit.calculateWitness(
      { leaf, pathElements, pathIndices, root },
      true,
    )
    await circuit.checkConstraints(w)
  })
})

describe('SetMembership', function () {
  let poseidon
  let F
  let circuit

  beforeAll(async function () {
    circuit = await wasm_tester(join(__dirname, 'membership_test.circom'))
    poseidon = await buildPoseidon()
    F = poseidon.F // TODO: do we actually need this or is it the default field?
  })

  it('Should produce valid proofs', async () => {
    const privkeys: bigint[] = [
      88549154299169935420064281163296845505587953610183896504176354567359434168161n,
      37706893564732085918706190942542566344879680306879183356840008504374628845468n,
      90388020393783788847120091912026443124559466591761394939671630294477859800601n,
      110977009687373213104962226057480551605828725303063265716157300460694423838923n,
    ]

    const addresses = privkeys.map((priv) =>
      BigNumber.from(
        utils.computeAddress(BigNumber.from(priv).toHexString()),
      ).toBigInt(),
    )

    const root = F.toObject(
      poseidon([
        poseidon([addresses[0], addresses[1]]),
        poseidon([addresses[2], addresses[3]]),
      ]),
    )
    const path = [
      addresses[1],
      F.toObject(poseidon([addresses[2], addresses[3]])),
    ]
    const indices = [0, 0]

    const privkey = privkeys[0]
    const pubkey: Point = Point.fromPrivateKey(privkey)
    const msghashBigint = 1234n
    const msghash: Uint8Array = bigintToUint8Array(msghashBigint)
    const sig: Uint8Array = await sign(msghash, bigintToUint8Array(privkey), {
      canonical: true,
      der: false,
    })
    const msghashArray: bigint[] = bigintToArray(64, 4, msghashBigint)

    const witness = await circuit.calculateWitness({
      msghash: msghashArray,
      pathElements: path,
      pathIndices: indices,
      pubkey: [bigintToArray(64, 4, pubkey.x), bigintToArray(64, 4, pubkey.y)],
      r: bigintToArray(64, 4, uint8ArrayToBigint(sig.slice(0, 32))),
      root,
      s: bigintToArray(64, 4, uint8ArrayToBigint(sig.slice(32, 64))),
    })

    await circuit.checkConstraints(witness)
  })
})
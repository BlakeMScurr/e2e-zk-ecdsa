'use client'
import { Screen } from '@components'
import { useAnonSet } from '@context/anonset'

export default function ChooseAnonSetTypePage() {
  const { resetAnonSet } = useAnonSet()

  return (
    <Screen
      question='What type of membership do you want to prove?'
      help={[
        'Cryptopunk: are you a member of the group of people who own a cryptopunk?',
        'ENS Voters: are you a member of the group of people who voted on a specific ENS proposal.',
        'ETH balance: are you a member of the group of people who own a min amount of ETH?',
        'ERC20 balance: are you a member of the group of people who own a min amount of a given ERC20 token?',
      ]}
      buttons={[
        {
          href: '/query/cryptopunk',
          onClick: resetAnonSet,
          text: 'Cryptopunk',
        },
        { href: '/query/ens', onClick: resetAnonSet, text: 'ENS Voters' },
        {
          href: '/query/eth-balance',
          onClick: resetAnonSet,
          text: 'ETH balance',
        },
        {
          href: '/query/erc20-balance',
          onClick: resetAnonSet,
          text: 'ERC20 balance',
        },
      ]}
    />
  )
}
import { Service } from 'typedi'
import { getErc20BalanceAnonSetQuery } from '@controllers/requests/getErc20BalanceAnonSetQuery'
import { Logger, LoggerInterface } from '@decorators/Logger'
import {
  BigQueryRepository,
  DuneRepository,
  GraphRepository,
  ParameterType,
  Query,
} from '@repositories'

@Service()
export class QueryService {
  constructor(
    readonly bigQueryRepository: BigQueryRepository,
    readonly duneRepository: DuneRepository,
    readonly graphRepository: GraphRepository,
    @Logger() readonly logger: LoggerInterface,
  ) {}

  async getEthBalanceAnonSet(min: number) {
    return this.bigQueryRepository.queryEthBalance(min).then((addresses) => {
      this.logger.info('Get ETH-balance based anonymity set')
      return addresses
    })
  }

  async getErc20BalanceAnonSet({
    min,
    tokenAddress,
  }: getErc20BalanceAnonSetQuery) {
    return this.duneRepository
      .executeDuneQuery(Query.Erc20, [
        { key: 'min', type: ParameterType.Number, value: min },
        {
          key: 'tokenAddress',
          type: ParameterType.Text,
          value: `'${tokenAddress}'`,
        },
      ])
      .then((result) => {
        this.logger.info('Get ERC20-balance based anonymity set')
        return result
      })
  }

  async getBeaconDepositors() {
    return this.graphRepository.getBeaconDepositors().then((result) => {
      this.logger.info('Get Beacon Contract Depositors anonymity set')
      return result
    })
  }

  async getEnsProposalVoters(
    ...args: Parameters<typeof this.graphRepository.getEnsProposalVoters>
  ) {
    return this.graphRepository.getEnsProposalVoters(...args)
  }

  async getPunkOwners() {
    return this.graphRepository.getPunkOwners()
  }
}

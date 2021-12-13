import { BigNumber } from '@ethersproject/bignumber'
import { Currency, CurrencyAmount } from '@sushiswap/core-sdk'

export enum AuctionTemplate {
  CROWDSALE = 1,
  DUTCH_AUCTION = 2,
  BATCH_AUCTION = 3,
}

export enum AuctionStatus {
  LIVE = 1,
  UPCOMING = 2,
  FINISHED = 3,
}

export interface AuctionTokenInfo {
  addr: string
  decimals: BigNumber
  name: string
  symbol: string
}

export interface AuctionDocument {
  name: string
  data: string
  lastModified: BigNumber
}

export interface AuctionPaymentCurrencyInfo {
  addr: string
  decimals: BigNumber
  name: string
  symbol: string
}

export interface RawAuction {
  addr: string
  endTime: BigNumber
  finalized: boolean
  startTime: BigNumber
  templateId: BigNumber
  tokenInfo: {
    addr: string
    decimals: BigNumber
    name: string
    symbol: string
  }
}

export interface RawAuctionInfo {
  addr: string
  auctionSuccessful: boolean
  commitmentsTotal: BigNumber
  documents: AuctionDocument[]
  endTime: BigNumber
  finalized: boolean
  goal: BigNumber
  paymentCurrency: string
  paymentCurrencyInfo: AuctionPaymentCurrencyInfo
  rate?: BigNumber
  startTime: BigNumber
  tokenInfo: AuctionTokenInfo
  totalTokens: BigNumber
  totalTokensCommitted?: BigNumber
  usePointList: boolean
  minimumPrice?: BigNumber
  startPrice?: BigNumber
  minimumCommitmentAmount?: BigNumber
}

export interface Auction {
  addr: string
  endTime: BigNumber
  finalized: boolean
  startTime: BigNumber
  templateId: BigNumber
  tokenInfo: AuctionTokenInfo
  status: AuctionStatus
  title: string
  auctionTemplate: AuctionTemplate
}

export interface AuctionCommitment {
  txHash: string
  blockNumber: number
  address: string
  amount: CurrencyAmount<Currency>
}

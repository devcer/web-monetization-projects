export interface IMonetizationCurrencyAmount {
  currency: string
  value: string
}

export interface IMonetizationEvent {
  amount?: string
  assetCode?: string
  assetScale?: string
  receipt?: string
  amountSent: IMonetizationCurrencyAmount
  paymentPointer: string
  incomingPayment: string
}

export default interface Transaction {
  payee: string
  referenceNumber: string
  date: date
  cleared: boolean
  paymentAmount: number
  depositAmount: number
}

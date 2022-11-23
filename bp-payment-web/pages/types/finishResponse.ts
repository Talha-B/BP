export type FinishResponse = {
    Success: boolean,
    ErrorMessage: string
    PaymentReceipt: PaymentReceipt
  }
  
export  type PaymentReceipt = {
      Location: string
      Date : Date
      PumpNumber : number
      FuelType : string
      PricePerLitre: number
      LitresFuelled : number
      TotalAmount : number
      PaymentTransactionId : string
      Last4DigitsOfPaymentCard : string
  }
  
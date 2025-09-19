export interface RawInvoice {
  invoiceNumber: number;
  clientName: string;
  date: string;
  status: string;
  amount: number;
}

export interface Invoice {
  invoiceNumber: number;
  clientName: string;
  date: Date;
  status: "PAID" | "UNPAID";
  amount: number;
}

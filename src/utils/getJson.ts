import type { Invoice, RawInvoice } from "../types/invoices.types";

export default async function getJson() {
  return import("../mocks/invoices.json")
    .then((res) => res.default as RawInvoice[])
    .then((invoices) => {
      return invoices.map((invoice) => {
        const status = invoice.status === "PAID" ? "PAID" : "UNPAID";
        return {
          invoiceNumber: invoice.invoiceNumber,
          clientName: invoice.clientName,
          date: new Date(invoice.date),
          status,
          amount: invoice.amount,
        };
      }) as Invoice[];
    });
}

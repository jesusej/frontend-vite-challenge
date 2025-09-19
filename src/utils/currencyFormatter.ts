import type { ValueFormatterParams } from "ag-grid-community";

export default function currencyFormatter({ value }: ValueFormatterParams) {
  if (isNaN(value)) {
    return "N/A";
  }
  return `$${value.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN`;
}

import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import type { Invoice, RawInvoice } from "../types/invoices.types";
import invoices from "../mocks/invoices.json";
import { useMemo } from "react";
import currencyFormatter from "../utils/currencyFormatter";

const InvoiceTable = () => {
  // Row Data: The data to be displayed.
  const rowData: Invoice[] = invoices.map((invoice: RawInvoice) => {
    const status = invoice.status === "PAID" ? "PAID" : "UNPAID";
    return {
      invoiceNumber: invoice.invoiceNumber,
      clientName: invoice.clientName,
      date: new Date(invoice.date),
      status,
      amount: invoice.amount,
    };
  });

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef<Invoice>[] = [
    { field: "invoiceNumber" },
    { field: "clientName" },
    { field: "date", filter: "agDateColumnFilter" },
    { field: "status", filter: true },
    { field: "amount", type: ["currency", "numericColumn"] },
  ];

  const columnTypes = useMemo(
    () => ({
      currency: {
        width: 150,
        valueFormatter: currencyFormatter,
      },
    }),
    []
  );

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    // Data Grid will fill the size of the parent container
    <div style={{ width: "100%", height: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        columnTypes={columnTypes}
      />
    </div>
  );
};

export default InvoiceTable;

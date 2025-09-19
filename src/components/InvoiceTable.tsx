import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import type { Invoice } from "../types/invoices.types";
import useInvoices from "../store/invoices";
import { useEffect, useMemo } from "react";
import currencyFormatter from "../utils/currencyFormatter";

const InvoiceTable = () => {
  // Row Data: The data to be displayed.
  const rowData = useInvoices((store) => store.invoices);
  const isLoading = useInvoices((store) => store.isLoading);
  const error = useInvoices((store) => store.error);
  const loadInvoices = useInvoices((store) => store.loadInvoices);

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

  useEffect(() => {
    loadInvoices();
  }, [loadInvoices]);

  if (isLoading) return <div>Loading invoices...</div>;
  if (error) return <div>Error: {error}</div>;

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

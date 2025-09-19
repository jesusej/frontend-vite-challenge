import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

interface CarData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const InvoiceTable = () => {
  // Row Data: The data to be displayed.
  const rowData: CarData[] = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef<CarData>[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

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
      />
    </div>
  );
};

export default InvoiceTable;

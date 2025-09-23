import InvoiceForm from "./components/InvoiceForm";
import InvoiceTable from "./components/InvoiceTable";

function App() {
  return (
    <div className="flex h-full w-full flex-col gap-2">
      <header className="flex justify-center bg-blue-950">
        <h1 className="text-white">Invoice manager</h1>
      </header>
      <div className="flex h-full flex-1 flex-row gap-2 px-2">
        <InvoiceForm />
        <InvoiceTable />
      </div>
    </div>
  );
}

export default App;

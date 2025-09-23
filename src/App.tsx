import InvoiceForm from "./components/InvoiceForm";
import InvoiceTable from "./components/InvoiceTable";

function App() {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <header className="flex justify-center bg-blue-950">
        <h1 className="text-white">Invoice manager</h1>
      </header>
      <div className="flex flex-row flex-1 gap-2 h-full px-2">
        <InvoiceForm />
        <InvoiceTable />
      </div>
    </div>
  );
}

export default App;

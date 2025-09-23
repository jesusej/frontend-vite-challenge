import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  CellStyleModule,
  ClientSideRowModelModule,
  DateFilterModule,
  ModuleRegistry,
} from "ag-grid-community";

// Register all Community features
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  DateFilterModule,
  CellStyleModule,
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

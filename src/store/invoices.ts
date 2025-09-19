import { create } from "zustand";
import type { Invoice } from "../types/invoices.types";
import getJson from "../utils/getJson";

interface InvoicesStore {
  invoices: Invoice[];
  isLoading: boolean;
  error: string | null;
  addInvoice: (newInvoice: Invoice) => void;
  loadInvoices: () => Promise<void>;
}

const useInvoices = create<InvoicesStore>((set) => ({
  invoices: [],
  isLoading: false,
  error: null,
  addInvoice: (newInvoice) =>
    set((state) => ({
      invoices: [
        ...state.invoices,
        {
          ...newInvoice,
          invoiceNumber: state.invoices.length + 1001,
          date: new Date(newInvoice.date),
        },
      ],
    })),
  loadInvoices: async () => {
    set({ isLoading: true, error: null });
    try {
      const invoices = await getJson();
      set({ invoices, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to load invoices",
        isLoading: false,
      });
    }
  },
}));

export default useInvoices;

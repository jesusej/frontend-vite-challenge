import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react-pro";
import { useState } from "react";
import { useFormik } from "formik";
import schema from "../schema/invoice.schema";
import useInvoices from "../store/invoices";
import type { Invoice } from "../types/invoices.types";

const InvoiceForm = () => {
  const [visible, setVisible] = useState(false);
  const addInvoice = useInvoices((store) => store.addInvoice);

  const formik = useFormik({
    initialValues: {
      clientName: "",
      date: "",
      amount: "",
      status: "",
    },
    validationSchema: schema,
    onSubmit: (values: unknown) => {
      addInvoice(values as Invoice);
      setVisible(false);
    },
  });
  return (
    <>
      <CButton onClick={() => setVisible(true)}>Add new invoice</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add new invoice</CModalTitle>
          <CModalBody>
            <CForm onSubmit={formik.handleSubmit}>
              <CFormInput
                label="Client name"
                {...formik.getFieldProps("clientName")}
              />
              <CFormInput
                label="Date"
                type="date"
                {...formik.getFieldProps("date")}
              />
              <CFormInput
                label="Amount"
                type="number"
                {...formik.getFieldProps("amount")}
              />
              <CFormSelect
                label="Status"
                options={[
                  { label: "Select status" },
                  { label: "Paid", value: "PAID" },
                  { label: "Unpaid", value: "UNPAID" },
                ]}
                {...formik.getFieldProps("status")}
              />
              <CButton color="primary" type="submit">
                Add invoice
              </CButton>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
          </CModalFooter>
        </CModalHeader>
      </CModal>
    </>
  );
};

export default InvoiceForm;

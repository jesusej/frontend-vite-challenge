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

const InvoiceForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton onClick={() => setVisible(true)}>Add new invoice</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add new invoice</CModalTitle>
          <CModalBody>
            <CForm>
              <CFormInput label="Client name" />
              <CFormInput label="Date" type="date" />
              <CFormInput label="Amount" type="number" />
              <CFormSelect
                label="Status"
                options={[
                  { label: "Select status" },
                  { label: "Paid", value: "PAID" },
                  { label: "Unpaid", value: "UNPAID" },
                ]}
              />
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Add invoice</CButton>
          </CModalFooter>
        </CModalHeader>
      </CModal>
    </>
  );
};

export default InvoiceForm;

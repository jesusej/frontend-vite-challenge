import * as Yup from "yup";

const schema = Yup.object({
  clientName: Yup.string().required("Client name is required"),
  date: Yup.date().required("Date is required"),
  amount: Yup.number().required("Amount is required"),
  status: Yup.string()
    .matches(/PAID|UNPAID/)
    .required("Status is required"),
});

export default schema;

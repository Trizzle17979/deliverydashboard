import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("First Name Required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .trim()
    .required("Last Name Required")
    .min(2, "Last name must be at least 2 characters"),
  email: yup
    .string()
    .trim()
    .email("Must be a valid email")
    .required("Email Required")
    .min(2, "Email must be at least 2 characters"),
  password: yup
    .string()
    .trim()
    .required("Password Required")
    .min(6, "Password must be at least 6 characters"),
  termsAndPrivacy: yup
    .boolean()
    .oneOf([true], "Terms & Privacy Policy Must Be Checked"),
});

export default formSchema;

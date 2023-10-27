import * as yup from "yup";

export const PasswordRegEx = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
export const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const zipRegex = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

 export const loginValidationSchema = yup.object({
    username: yup.string()
        .required('Enter your Username'),
    password: yup
        .string()
        .required("Enter Your Password")
        .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
        .min(8, "Password Should be minimum 8 character")
        .max(50, "Too long"),
  });

  export const signUpValidationSchema = yup.object({
    phoneNumber: yup
        .string()
        .matches(phoneRegex, "Invalid Phone Number")
        .max(10, "Phone number must have 10 digits")
        .required("Phone number is required"),
    email: yup.string()
        .matches(emailRegex, "Invalid Email"),
    firstname: yup.string()
        .max(50),
    lastname: yup.string()
        .max(50)
        .required('Last Name is required'),
    address1: yup.string()
        .min(1)
        .max(150)
        .required('Address 1 is required'),
    address2: yup.string()
        .max(150),
    city: yup.string(),
    zipCode: yup.string()
        .required('Zip Code is Required')
        .matches(zipRegex, "Zip format is not correct"),
    state: yup.string(),
    password: yup
        .string()
        .required("Enter Your Password")
        .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
        .min(8, "Password Should be minimum 8 character")
        .max(50, "Too long"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not matched")
        .required("Confirm Password is Required"),
  });
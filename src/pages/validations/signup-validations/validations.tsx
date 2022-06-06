export type SignupFieldsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
};

export default function validateInfo(values: SignupFieldsType) {
  let errors: SignupFieldsType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  };

  if (!values.firstName) {
    errors.firstName = "Please type your first name";
  } else if (/^(?=.*[0-9])/i.test(values.firstName)) {
    errors.firstName = "Name can not have a numeric character";
  } else if (/^(?=.*[!@#$%^&*])/i.test(values.firstName)) {
    errors.firstName = "Name can not have a special character";
  }

  if (!values.lastName) {
    errors.lastName = "Please type your last name";
  } else if (/^(?=.*[0-9])/i.test(values.lastName)) {
    errors.lastName = "Name can not have a numeric character";
  } else if (/^(?=.*[!@#$%^&*])/i.test(values.lastName)) {
    errors.lastName = "Name can not have a special character";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Email format not correct";
  }

  if (!/^(?=.*[0-9])/i.test(values.password)) {
    errors.password = "Password must have atleast one numeric value";
  } else if (!/^(?=.*[!@#$%^&*])/i.test(values.password)) {
    errors.password = "Password must have atleast one special character";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password do not match";
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Please enter your date of birth";
  } else if (
    !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(values.dateOfBirth)
  ) {
    errors.dateOfBirth = "Please enter in this format YYYY-MM-DD 1990-09-22";
  }

  return errors;
}

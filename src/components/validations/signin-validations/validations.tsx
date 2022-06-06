export type SigninFieldsType = {
  email: string;
  password: string;
};

export default function validateInfo(values: SigninFieldsType) {
  let errors: SigninFieldsType = {
    email: "",
    password: "",
  };

  if (!values.email) {
    errors.email = "Email Required";
  }

  if (
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

  return errors;
}

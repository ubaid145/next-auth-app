export type ResetPasswordFieldsType = {
  newPassword: string;
  confirmNewPassword: string;
};

export default function validateInfo(values: ResetPasswordFieldsType) {
  let errors: ResetPasswordFieldsType = {
    newPassword: "",
    confirmNewPassword: "",
  };

  if (!/^(?=.*[0-9])/i.test(values.newPassword)) {
    errors.newPassword = "Password must have atleast one numeric value";
  } else if (!/^(?=.*[!@#$%^&*])/i.test(values.newPassword)) {
    errors.newPassword = "Password must have atleast one special character";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "Password needs to be 8 characters or more";
  }

  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = "Password is Required";
  } else if (values.confirmNewPassword !== values.newPassword) {
    errors.confirmNewPassword = "Password do not match";
  }

  return errors;
}

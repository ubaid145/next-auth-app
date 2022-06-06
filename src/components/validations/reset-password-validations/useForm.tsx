import { useState } from "react";
import { ResetPasswordFieldsType } from "./validations";

const UseForm = (validate: Function) => {
  const [values, setValues] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState<ResetPasswordFieldsType>();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const getErrors = () => {
    setErrors(Object.assign({}, validate(values)));
  };
  return { handleChange, values, getErrors, errors };
};

export default UseForm;

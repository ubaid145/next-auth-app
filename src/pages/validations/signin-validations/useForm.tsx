import { useState } from "react";
import { SigninFieldsType } from "./validations";

const UseForm = (validate: Function) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<SigninFieldsType>();

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

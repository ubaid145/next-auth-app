import { useState } from "react";
import { SignupFieldsType } from "./validations";

const UseForm = (validate: Function) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState<SignupFieldsType>();

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

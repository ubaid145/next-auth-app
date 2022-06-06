import Link from "next/link";
import UseForm from "../validations/signup-validations/useForm";
import validate from "../validations/signup-validations/validations";
import { Form, Input } from "../common";
import { useRouter } from "next/router";
import axios from "axios";
import api from "../../config/api";

const Signup = () => {
  const router = useRouter();
  const { handleChange, values, getErrors, errors } = UseForm(validate);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getErrors();

    const validateErrors: any = validate(values);
    let isValid = true;
    Object.keys(validateErrors).forEach((key: any) => {
      if (validateErrors[key]) {
        isValid = false;
      }
    });
    if (isValid) {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        dateOfBirth: values.dateOfBirth,
        email: values.email,
        password: values.password,
      };
      const response = await axios.post(api.auth.register, payload);
      const { status, data } = response;
      if (status === 201) {
        router.push(
          { pathname: "/auth/activate-account", query: { id: data.id } },
          "/auth/activate-account"
        );
      }
    }
  };

  return (
    <>
      <div className="content sm:py-6">
        <div className="content-dimensions">
          <span className="span-title">Welcome!</span>
          <Form onSubmit={handleSubmit}>
            <div className="form-display text-left mt-2">
              <div className="form-top-style"></div>
              <div className="form-padding">
                <Input
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="input-style"
                  label="First Name"
                  labelClassName="label-style"
                  error={errors?.firstName}
                />
                <Input
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="input-style"
                  label="Last Name"
                  labelClassName="label-style"
                  error={errors?.lastName}
                />
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                  placeholder="YYYY-MM-DD"
                  className="input-style"
                  label="Date of Birth"
                  font-normal
                  labelClassName="label-style"
                  error={errors?.dateOfBirth}
                />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="input-style"
                  label="Email"
                  labelClassName="label-style"
                  error={errors?.email}
                />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="input-style"
                  label="Password"
                  labelClassName="label-style"
                  error={errors?.password}
                />
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="input-style"
                  label="Confirm Password"
                  labelClassName="label-style"
                  error={errors?.confirmPassword}
                />
                <div className="button-container">
                  <button className="button-style" type="submit">
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </Form>
          <br />
          <span className="span-text">
            Already a user?{"  "}
            <Link href="/auth/sign-in">
              <button className="span-button">Signin</button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;

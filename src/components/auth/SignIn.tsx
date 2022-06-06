import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import UseForm from "../validations/signin-validations/useForm";
import validate from "../validations/signin-validations/validations";
import { Form, Input } from "../common";
import api from "../../config/api";

const Signin = () => {
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
        email: values.email,
        password: values.password,
      };
      const response = await axios.post(api.auth.login, payload);
      if (response.status === 200) {
        router.push("/homepage");
      }
    }
  };

  return (
    <>
      <div className="content sm:py-12">
        <div className="content-dimensions">
          <span className="span-title">Login to your account</span>
          <Form onSubmit={handleSubmit}>
            <div className="form-display mt-4">
              <div className="form-top-style"></div>
              <div className="form-padding">
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
                <div className="button-container">
                  <button className="button-style" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </Form>
          <div className="forgot-password-container">
            <Link href="/auth/forgot-password">
              <button className="forgot-password-button">
                Forgot password?
              </button>
            </Link>
          </div>
          <span className="span-text">
            Don't have an account?{" "}
            <Link href="/auth/sign-up">
              <button className="span-button">Signup</button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signin;

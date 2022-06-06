import { SetStateAction, useState } from "react";
import { Form, Input } from "../common";
import { useRouter } from "next/router";
import { getUserByEmail } from "../../utils/user";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const valdiate = (email: string) => {
    let error = "";

    if (!email) {
      error = "Please enter your email";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      error = "Email format not correct";
    }
    return error;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const validateError: any = valdiate(email);
    let isValid = true;

    if (validateError) {
      isValid = false;
      setErrorMessage(validateError);
    }

    const user = await getUserByEmail(email);

    if (isValid && Object.keys(user).length > 0) {
      router.push(
        { pathname: "/auth/reset-password", query: { email } },
        "/auth/reset-password"
      );
    }
  };

  return (
    <>
      <div className="content sm:py-12">
        <div className="content-dimensions">
          <span className="span-title">Oops! Forgot your password?</span>
          <Form onSubmit={handleSubmit}>
            <div className="form-display text-center mt-2">
              <div className="form-top-style"></div>
              <div className="form-padding">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setEmail(e?.target?.value)}
                  placeholder="Email"
                  className="input-style"
                  label="Enter the email you want to receieve the password recovery"
                  labelClassName="label-style"
                  error={errorMessage}
                />
                <div className="button-container">
                  <button className="button-style" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

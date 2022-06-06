import { Form, Input } from "../../components/common";
import { useRouter } from "next/router";
import UseForm from "../validations/reset-password-validations/useForm";
import validate from "../validations/reset-password-validations/validations";
import axios from "axios";
import api from "../../config/api";

const ForgotPassword = () => {
  const router = useRouter();
  const { handleChange, values, getErrors, errors } = UseForm(validate);

  const handleSubmit = (e: { preventDefault: () => void }) => {
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
      resetPassword(values.newPassword);
    }
  };

  const resetPassword = async (password: string) => {
    const { email } = router.query;
    const response = await axios.put(api.auth.resetPassword, {
      email,
      password,
    });
    if (response.status === 200) {
      router.push("/auth/password-changed");
    }
  };

  return (
    <>
      <div className="content sm:py-12">
        <div className="content-dimensions">
          <span className="span-title">Type your new password</span>
          <Form onSubmit={handleSubmit}>
            <div className="form-display text-left mt-2">
              <div className="form-top-style"></div>
              <div className="form-padding">
                <Input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  placeholder="Password"
                  className="input-style"
                  label="New Password"
                  labelClassName="label-style"
                  error={errors?.newPassword}
                />
                <Input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  value={values.confirmNewPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="input-style"
                  label="Confirm Password"
                  labelClassName="label-style"
                  error={errors?.confirmNewPassword}
                />
                <div className="button-container">
                  <button className="button-style" type="submit">
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

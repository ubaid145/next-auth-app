import Link from "next/link";

const PasswordChanged = () => {
  return (
    <>
      <div className="content sm:py-12">
        <div className="content-dimensions">
          <span className="span-reset-password">Success!</span>
          <div className="form-display mt-4 text-center">
            <div className="form-top-style"></div>
            <div className="form-padding">
              <label className="label-style">Your Password is changed.</label>
              <div className="button-container">
                <Link href="/auth/sign-in">
                  <button className="button-style">Go back to Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChanged;

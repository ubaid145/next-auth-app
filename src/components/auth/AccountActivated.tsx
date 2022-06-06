import Link from "next/link";

const AccountActivated = () => {
  return (
    <>
      <div className="content sm:py-12">
        <div className="content-dimensions">
          <span className="span-reset-password">Success!</span>
          <div className="form-display mt-4 text-center">
            <div className="form-top-style"></div>
            <div className="form-padding">
              <label className="label-style">
                Congratulations, your Account Succefully Activated.
              </label>
              <div className="button-container">
                <Link href={"/auth/sign-in"}>
                  <button className="button-style">Go Back To Login </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountActivated;

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../config/api";

const ActivateAccount = () => {
  const router = useRouter();
  const activateAcount = async () => {
    const { id } = router.query;
    const response = await axios.post(api.auth.activateAcount, { id });
    if (response.status === 201) {
      router.push("/auth/activated");
    }
  };

  return (
    <>
      <div className="content sm:py-12">
        <div className="content-dimensions">
          <span className="span-reset-password">Success!</span>
          <div className="form-display mt-4 text-center">
            <div className="form-top-style"></div>
            <div className="form-padding">
              <label className="label-style">
                Activation email will be sent but for test purposes please
                follow below mentioned directions. You are almost there. Please
                click on the following button to activate your account.
              </label>
              <div className="button-container">
                <button className="button-style" onClick={activateAcount}>
                  Activate Account{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivateAccount;

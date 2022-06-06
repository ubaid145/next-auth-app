import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="content-landing-page">
        <div className="content-dimensions">
          <Link href={"/auth/sign-in"}>
            <p className="landing-page-text">Get Started</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { InferGetServerSidePropsType } from "next";
import axios from "axios";
import { withIronSessionSsr } from "iron-session/next";

import { sessionOptions } from "../../lib/sessions";
import { User } from "../api/user";

export default function HomePage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="home-wrapper">
        <h1 className="home-container">User Data</h1>
        {user?.isLoggedIn && (
          <div className="home-content" key={user.data.email}>
            <h1 className="home-data-style">
              <strong className="text-size">Name: </strong>
              {user?.data?.firstName} {user?.data?.lastName}
              <p>
                <strong className="text-size">Email: </strong>
                {user?.data?.email}
              </p>
              <p>
                <strong className="text-size">Date of Birth: </strong>
                {user?.data?.dateOfBirth}
              </p>
              <p>
                <strong className="text-size">Shoping Preference: </strong>
                XYZ
              </p>
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/auth/sign-in");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: { isLoggedIn: false, data: {} } as User,
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
},
sessionOptions);

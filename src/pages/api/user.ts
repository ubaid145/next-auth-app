import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/sessions";
import { NextApiRequest, NextApiResponse } from "next";

export type User = {
  isLoggedIn: boolean;
  data: {
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
};

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      data: {
        email: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
      },
    });
  }
}

import type { IronSessionOptions } from "iron-session";
import type { User } from "../pages/api/user";

export const sessionOptions: IronSessionOptions = {
  password: process.env.CLIENT_SECRET as string,
  cookieName: process.env.COOKIE_NAME as string,
  cookieOptions: {
    //secure: process.env.NODE_ENV === "production",
    secure: false,
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}

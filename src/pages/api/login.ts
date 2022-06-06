import type { User } from "./user";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/sessions";
import { NextApiRequest, NextApiResponse } from "next";

import { getUserByEmail } from "../../utils/user";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = await req.body;
    const userData = await getUserByEmail(email);
    if (Object.keys(userData).length === 0) {
        return res.status(401).json({ message: 'User do not exists' })
    }
    const { firstName, lastName, dateOfBirth } = userData
    try {
        if (userData.password === password) {

            const user = {
                isLoggedIn: true,
                data: {
                    email,
                    firstName,
                    lastName,
                    dateOfBirth
                }
            } as User;
            req.session.user = user;
            await req.session.save();
            return res.json(user);
        }
        return res.status(401).json({ message: 'Password is incorrect' });
    } catch (error) {
        return res.status(500).json({ message: (error as Error).message });
    }
}
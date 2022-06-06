// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { getUserByEmail } from "../../utils/user";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;
  const response = await getUserByEmail(email);

  const responseData = await axios.put(
    `${process.env.JSON_SERVER_HOST}/user/${response.id}`,
    { ...response, password }
  );

  const { data, status, statusText } = responseData;
  if (responseData.status === 200) {
    return res.status(200).json(data);
  }

  return res.status(status).json({ message: `Error: ${statusText}` });
}

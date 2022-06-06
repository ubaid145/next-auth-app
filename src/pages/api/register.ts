// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios.post(
    `${process.env.JSON_SERVER_HOST}/pendingUsers`,
    req.body
  );
  const { status, data, statusText } = response;
  if (status === 201) {
    return res.status(201).json(data);
  }
  return res.status(status).json({ message: `Error: ${statusText}` });
}

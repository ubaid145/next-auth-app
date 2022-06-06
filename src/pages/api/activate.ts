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
  const { id } = req.body;
  const response = await axios.get(
    `${process.env.JSON_SERVER_HOST}/pendingUsers/${id}`
  );
  const { firstName, lastName, email, dateOfBirth, password } = response?.data;
  const payload = { firstName, lastName, email, dateOfBirth, password };
  const responseData = await axios.post(
    `${process.env.JSON_SERVER_HOST}/user`,
    payload
  );
  const responseDelete = await axios.delete(
    `${process.env.JSON_SERVER_HOST}/pendingUsers/${id}`
  );
  const { data, status, statusText } = responseData;
  if (responseData.status === 201) {
    return res.status(201).json(data);
  }

  return res.status(status).json({ message: `Error: ${statusText}` });
}

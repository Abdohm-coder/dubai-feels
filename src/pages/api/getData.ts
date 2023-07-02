import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { url, ...body } = req.body;
    const response = await axios.post(
      `https://www.raynab2b.com/api/${url}`,
      body
    );
    const data = await response.data.json();
    // console.log(data)
    res.status(200).json(data);
  } catch (err: any) {
    console.error("res: ", err.response.data);
    res.status(500).json(err.response.data);
  }
}

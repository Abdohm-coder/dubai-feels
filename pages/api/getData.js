import axios from "axios";

export default async function handler(req, res) {
  try {
    const { url, ...body } = req.body;
    const response = await axios.post(
      `https://www.raynab2b.com/api/${url}`,
      body
    );
    const data = await response.json();
    // console.log(data)
    res.status(200).json(data);
  } catch (err) {
    console.error("res: ", err.response.data);
    res.status(500).json(err.response.data);
  }
}

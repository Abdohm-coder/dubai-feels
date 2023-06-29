import axios from "axios";

export default async function handler (_, res) {
    try{
        const response = await axios.get("https://www.raynab2b.com/api/Tour/countries");
        const data = await response.json();
        console.log(data)
        res.status(200).json(data);
    }catch(err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error :(" })
    }
}
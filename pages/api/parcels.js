import axios from "axios";

export default async (req, res) => {
  const keys =
    process.env.SENDCLOUD_API_KEY + ":" + process.env.SENDCLOUD_API_SECRET;
  const buff = new Buffer.from(keys, "utf8");
  const encode64 = buff.toString("base64");

  const headers = {
    Authorization: `Basic ${encode64}`,
  };

  console.log(headers);

  try {
    const sc = await fetch("https://panel.sendcloud.sc/api/v2/parcels", {
      method: "GET",
      headers: headers,
    });

    const data = sc.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

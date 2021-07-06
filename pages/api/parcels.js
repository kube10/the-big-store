import axios from "axios";

export default async function handler(req, res) {
  const keys =
    process.env.SENDCLOUD_API_KEY + ":" + process.env.SENDCLOUD_API_SECRET;
  const buff = new Buffer.from(keys, "utf8");
  const encode64 = buff.toString("base64");
  const headers = {
    Authorization: `Basic ${encode64}`,
  };

  if (req.method === "GET") {
    try {
      const sc = await fetch("https://panel.sendcloud.sc/api/v2/parcels", {
        headers,
      });
      const data = await sc.json();
      console.log(data);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({ msg: err.message });
    }
  } else if (req.method === "POST") {
    try {
      console.log(req.body);
      const houseNumber = req.body.shippingAddress1.split(/(\d+)/g);
      const streetName = req.body.shippingAddress1.replace(houseNumber[1], "");
      const body = {
        parcel: {
          name: `${req.body.shippingAddressFirstName} ${req.body.shippingAddressLastName}`,
          address: streetName,
          house_number: houseNumber,
          city: req.body.shippingAddressCity,
          postal_code: req.body.shippingPostalCode,
          country: req.body.shippingAddressCountry,
        },
      };

      const sc = await fetch("https://panel.sendcloud.sc/api/v2/parcels", {
        method: "POST",
        headers: {
          Authorization: `Basic ${encode64}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await sc.json();

      console.log(sc);

      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} nog allowed.` });
  }
}

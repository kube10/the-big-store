import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SendCloud from "@aquilacms/sendcloud";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const sendCloud = new SendCloud({
    api_key: process.env.SENDCLOUD_API_KEY,
    api_secret: process.env.SENDCLOUD_API_SECRET,
  });

  useEffect(async () => {
    try {
      const result = await sendCloud.parcels.getParcels();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className={styles.container}>
      <h1>The Big Store.</h1>
    </div>
  );
}

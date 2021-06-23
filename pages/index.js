import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SendCloud from "@aquilacms/sendcloud";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(async () => {
    try {
      const result = await axios.get(
        "https://panel.sendcloud.sc/api/v2/parcels"
      );
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

import "../styles/globals.css";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

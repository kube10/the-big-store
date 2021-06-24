import styles from "../styles/Layout.module.css";
import HtmlHead from "./HtmlHead";
import Snipcart from "./Snipcart";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <HtmlHead />
      <h1>The Big Store.</h1>
      {children}
      <Snipcart />
    </div>
  );
};

export default Layout;

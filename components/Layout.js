import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>The Big Store.</h1>
      {children}
    </div>
  );
};

export default Layout;

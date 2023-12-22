import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dev Tech</div>
      <div className={styles.text}>© Todos direitos reservados</div>
    </div>
  );
};

export default Footer;

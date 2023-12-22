import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Disponivel agora</span>
          <h3 className={styles.title}>
            Como você pode utilizar o sistema imobil
          </h3>
          <span className={styles.subtitle}>Aprenda em 4 minutos</span>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Veja mais
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            Novas ações de servidor estão disponíveis, a pré-renderização
            parcial está chegando!
          </h3>
          <span className={styles.subtitle}>Aumente sua produtividade</span>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

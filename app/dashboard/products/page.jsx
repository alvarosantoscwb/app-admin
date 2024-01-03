import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/Products/products.module.css";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Pesquise um produto..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Adicione um novo</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Título</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Criado em</td>
            <td>Estoque</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone 15
              </div>
            </td>
            <td>Desc</td>
            <td>R$ 4.999,00</td>
            <td>13/01/2024</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;

import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Pesquisar usuário..." />
        <Link href="/dashboard/users/">
          <button className={styles.addButton}>Adicionar novo</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Data Criação</td>
            <td>Função</td>
            <td>Status</td>
          </tr>
          <tbody></tbody>
        </thead>
      </table>
    </div>
  );
};

export default UsersPage;

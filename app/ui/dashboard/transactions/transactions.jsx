import React from "react";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimas transações</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Status</td>
            <td>Data</td>
            <td>Quantidade</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Transactions;

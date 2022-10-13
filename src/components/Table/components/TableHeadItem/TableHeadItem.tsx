import React from 'react';
import styles from './TableHeadItem.module.css';

type TableHeadItemType = {
  value: string;
  onClick: () => void;
};

const TableHeadItem = React.memo(({ value, onClick }: TableHeadItemType) => {
  return (
    <th className={styles.cell}>
      <span>{value}</span>
      <button className={styles.button} onClick={onClick} type='button'>
        🔽
      </button>
      <button className={styles.button} type='button'>
        🔼
      </button>
    </th>
  );
});

export default TableHeadItem;

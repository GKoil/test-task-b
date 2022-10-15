import React, { useState, useEffect, useCallback } from 'react';
import { TableItem } from '../../types/tableData.type';
import TableCell from './components/TableItem';
import groupBy from '../../utils/groupBy';
import TableHeadItem from './components/TableHeadItem';
import styles from './Table.module.css';

type TableType = {
  itemsData: TableItem[];
};

const KEY_TABLE_GROUP = 'userId';

enum Sort {
  up = '>',
  down = '<',
}

const getSortFunction = (sortType: Sort, id: number) => {
  switch (sortType) {
    case '<':
      return (a: TableItem[], b: TableItem[]) =>
        a[id - 1].title < b[id - 1].title ? -1 : 1;
    case '>':
      return (a: TableItem[], b: TableItem[]) =>
        a[id - 1].title > b[id - 1].title ? -1 : 1;
    default:
      return null;
  }
};

const Table = ({ itemsData }: TableType) => {
  const [headCells, setHeadCells] = useState<string[]>();
  const [bodyCells, setBodyCells] = useState<TableItem[][]>();

  useEffect(() => {
    const itemsGroupByColumns = groupBy(itemsData, KEY_TABLE_GROUP);
    const columns = Object.keys(itemsGroupByColumns);
    setHeadCells(columns);

    const tableBodyValues = Object.values(itemsGroupByColumns);
    // TODO: Вынести в отдельную функцию
    const processedBodyCells = tableBodyValues[0].map((_, index) =>
      tableBodyValues.map(row => row[row.length - 1 - index])
    );
    setBodyCells(processedBodyCells);
  }, [itemsData]);

  const handleSort = useCallback(
    (sortType: Sort) => (id: number) => {
      const sortFunc = getSortFunction(sortType, id);
      const prevSort = [...bodyCells];
      const sortedBodyCells = prevSort.sort(sortFunc);
      setBodyCells(sortedBodyCells);
    },
    [bodyCells]
  );

  return (
    <>
      {headCells ? (
        <table className={styles.table}>
          <thead>
            <tr>
              {headCells.map(item => (
                <TableHeadItem
                  onClickSortUp={() => handleSort(Sort.up)(Number(item))}
                  onClickSortDown={() => handleSort(Sort.down)(Number(item))}
                  key={item}
                  value={item}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyCells &&
              bodyCells.map((item, index) => {
                return (
                  <tr key={index}>
                    {item.map(({ title, id }) => (
                      <TableCell key={id} id={id} value={title} />
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <span>Недостаточно данных</span>
      )}
    </>
  );
};

export default Table;

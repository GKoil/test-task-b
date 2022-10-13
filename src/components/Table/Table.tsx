import React from 'react';
import { TableItem } from '../../types/tableData.type';
import TableCell from './components/TableItem';
import groupBy from '../../utils/groupBy';

type TableType = {
  itemsData: TableItem[];
};

const Table = ({ itemsData }: TableType) => {
  const groupByColumns = groupBy<TableItem[]>(itemsData, 'userId');
  const tableValues = Object.values(groupByColumns);
  const processedBody = tableValues[0].map((val, index) =>
    tableValues.map(row => row[row.length - 1 - index])
  );

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(groupByColumns).map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {processedBody.map((item, index) => {
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
  );
};

export default Table;

import React from 'react';
import { TableItem } from '../../types/tableData.type';
import TableCell from './components/TableItem';

type TableType = {
  itemsData: TableItem[];
};

const groupByHeader = <
  T extends {
    [key: string]: string | number;
    id: number;
    title: string;
  }[]
>(
  objects: T,
  key: string
) => {
  return objects.reduce((acc, object) => {
    const groupName = object[key];
    const group = acc[groupName] ?? ([] as []);
    return { ...acc, [groupName]: [...group, object] };
  }, {} as { [key: string]: T });
};

const Table = ({ itemsData }: TableType) => {
  const processedData = groupByHeader<TableItem[]>(itemsData, 'userId');
  const processedContent = Object.values(processedData);
  // TODO: Выделить в функцию
  const processedContentRender = processedContent[0].map((val, index) =>
    processedContent.map(row => row[row.length - 1 - index])
  );

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(processedData).map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {processedContentRender.map((item, index) => {
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

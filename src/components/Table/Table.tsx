import React from 'react';
import { TableItem } from '../../types/tableData.type';
import TableCell from './components/TableItem';

type TableType = {
  itemsData: TableItem[];
};

const groupByHeader = (objects: TableItem[]) => {
  const GROUP_KEY = 'userId';

  return objects.reduce((acc, object) => {
    const groupName = object[GROUP_KEY];
    const group = acc[groupName] ?? [];
    return { ...acc, [groupName]: [...group, object] };
  }, {} as { [key: string]: TableItem[] });
};

const Table = ({ itemsData }: TableType) => {
  const processedData = groupByHeader(itemsData);
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

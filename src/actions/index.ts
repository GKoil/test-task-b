import { ADD } from '../action-types';
import { TableItem } from '../types/tableData.type';

const add = (tableData: TableItem[]) => {
  return {
    type: ADD,
    payload: tableData,
  };
};

export { add };

import { ADD } from '../action-types';
import { TableItem } from '../types/tableData.type';

const initialState: { tableData: TableItem[] } = {
  tableData: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return {
        tableData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

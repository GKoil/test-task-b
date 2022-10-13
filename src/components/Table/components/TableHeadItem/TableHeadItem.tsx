import React from 'react';

type TableHeadItemType = {
  value: string;
  onClick: () => void;
};

const TableHeadItem = React.memo(({ value, onClick }: TableHeadItemType) => {
  return (
    <th>
      <button onClick={onClick} type='button'>
        {value} 🔽🔼 ↕️
      </button>
    </th>
  );
});

export default TableHeadItem;

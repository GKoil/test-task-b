import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './components/Table';
import service from './api';
import { ADD } from './action-types';

const App = () => {
  const dispatch = useDispatch();
  // @ts-ignore TODO: fix ts-ignore
  const tableData = useSelector(state => state.tableData) as TableItem[];

  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    setStatus('pending');
    service
      .getTable()
      .then(data => {
        setStatus('success');
        dispatch({ type: ADD, payload: data });
      })
      .catch(error => {
        setStatus('error');
      });
  }, []);

  return (
    <>
      {status === 'pending' && <div>spinner</div>}
      {status === 'success' && <Table itemsData={tableData} />}
      {status === 'error' && <div>error</div>}
    </>
  );
};

export default App;

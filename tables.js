import React from 'react';
import TableComponent from '../components/TableComponent';

const data = [
  { col1: 'Hello', col2: 'World' },
  { col1: 'react-table', col2: 'rocks' },
  { col1: 'whatever', col2: 'you want' },
];

const columns = [
  { Header: 'Column 1', accessor: 'col1' },
  { Header: 'Column 2', accessor: 'col2' },
];

const Tables = () => {
  return (
    <div>
      <h1>Tables</h1>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default Tables;

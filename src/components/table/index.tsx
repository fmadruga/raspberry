import React from 'react';
import {DataTable} from 'react-native-paper';

const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Ano</DataTable.Title>
        <DataTable.Title>Ganhadores</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>2020</DataTable.Cell>
        <DataTable.Cell>2020</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;

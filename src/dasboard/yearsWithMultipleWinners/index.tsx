import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import Card from '../../components/card';
import { IYearProjection } from '../../interfaces/yearProjection';
import { yearsWithMultipleWinners } from '../../services/requests';

const YearsMultipleWinners = () => {
  const [winners, setWinners] = useState<IYearProjection[]>([]);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await yearsWithMultipleWinners();
        setWinners(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWinners();
  }, []);
  
  return (
    <Card title="List years with the multiple winners">
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Year</DataTable.Title>
          <DataTable.Title>Win count</DataTable.Title>
        </DataTable.Header>
        {winners?.map((winner, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{winner.year}</DataTable.Cell>
            <DataTable.Cell>{winner.winnerCount}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
};

export default YearsMultipleWinners;

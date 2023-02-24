import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import Card from '../../components/card';
import { IStudio } from '../../interfaces/studio';
import { studiosWithWinners } from '../../services/requests';

const TopThreeStudios = () => {
  const [studios, setStudios] = useState<IStudio[]>([]);

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        const response = await studiosWithWinners();
        setStudios(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudios();
  }, []);
  
  return (
    <Card title="Top 3 studios with winners">
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Win count</DataTable.Title>
        </DataTable.Header>
        {studios?.map((studio, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{studio.name}</DataTable.Cell>
            <DataTable.Cell>{studio.winCount}</DataTable.Cell>
          </DataTable.Row>
        )).slice(0,3)}
      </DataTable>
    </Card>
  );
};

export default TopThreeStudios;

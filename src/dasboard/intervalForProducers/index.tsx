import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import Card from '../../components/card';
import { IProducer, IProducerInterval } from '../../interfaces/producer';
import { intervalForProducers } from '../../services/requests';

const IntervalForProducers = () => {
  const [intervals, setIntervals] = useState<IProducer[]>([]);

  useEffect(() => {
    const fetchIntervals = async () => {
      try {
        const response = await intervalForProducers();
        setIntervals(response);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchIntervals();
  }, []);

  intervals.map(interval => {
    console.log(interval.followingWin);
  });
  
  return (
    <Card title="Producers with longest and shortest interval between wins">
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Win count</DataTable.Title>
        </DataTable.Header>
        {/* {studios?.map((studio, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{studio.name}</DataTable.Cell>
            <DataTable.Cell>{studio.winCount}</DataTable.Cell>
          </DataTable.Row>
        )).slice(0,3)} */}
      </DataTable>
    </Card>
  );
};

export default IntervalForProducers;

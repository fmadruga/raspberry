import React, { useEffect, useState } from 'react';
import { DataTable, Title } from 'react-native-paper';
import Card from '../../components/card';
import { IProducerInterval } from '../../interfaces/producer';
import { intervalForProducers } from '../../services/requests';

const IntervalForProducers = () => {
  const [intervals, setIntervals] = useState<IProducerInterval | undefined>();

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

  const renderDataTable = (data: IProducerInterval['max' | 'min'], title: string) => (
    <>
      <Title>{title}</Title>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Producer</DataTable.Title>
          <DataTable.Title>Interval</DataTable.Title>
          <DataTable.Title>Previous Year</DataTable.Title>
          <DataTable.Title>Following Year</DataTable.Title>
        </DataTable.Header>
        {data.map((interval, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{interval.producer}</DataTable.Cell>
            <DataTable.Cell>{interval.interval}</DataTable.Cell>
            <DataTable.Cell>{interval.previousWin}</DataTable.Cell>
            <DataTable.Cell>{interval.followingWin}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>

  )

  return (
    <Card title="Producers with longest and shortest interval between wins">
      
      {intervals && (
        <>
          {renderDataTable(intervals.max, 'Maximum')}
          {renderDataTable(intervals.min, 'Minimun')}
        </>
      )}
    </Card>
  );
};

export default IntervalForProducers;

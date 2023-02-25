import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { DataTable } from "react-native-paper";
import Card from "../../components/card";
import { IMovie } from "../../interfaces/movie";
import { winnersByYear } from "../../services/requests";
import RNPickerSelect from "react-native-picker-select";

interface IYearOption {
  label: string;
  value: number;
}

const WinnersByYear = () => {
  const getYearsList = (yearsAgo: number, currentYear: number): IYearOption[] => Array.from({ length: yearsAgo + 1 }, (_, i) => {
    const year = currentYear - i;
    return {
      label: `${year}`,
      value: year,
    }
  });
  const currentYear = new Date().getFullYear();
  const yearsList = getYearsList(100, currentYear);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchMovies = async (yearSet?: number) => {
    try {
      const response = await winnersByYear({ year: yearSet });
      setMovies(response);
    } catch (error) {
      console.error(error);
    }
  }

  const renderDataTable = (data: IMovie[]) => (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>Year</DataTable.Title>
        <DataTable.Title>Title</DataTable.Title>
      </DataTable.Header>
      {data.map((movie, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{movie.id}</DataTable.Cell>
            <DataTable.Cell>{movie.year}</DataTable.Cell>
            <DataTable.Cell>{movie.title}</DataTable.Cell>
          </DataTable.Row>
        ))}
    </DataTable>
  )

  return (
    <Card title="List movie winners by year">
      <RNPickerSelect placeholder={{ label: "Select the year", value: null }}
        items={yearsList}
        onValueChange={(year) => fetchMovies(year)} />
      {movies ? renderDataTable(movies) : 'Carregando'}
    </Card>
  )
}

export default WinnersByYear;

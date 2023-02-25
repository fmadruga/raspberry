import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { getMovies } from '../services/requests';
import { IMovie } from '../interfaces/movie';
import ScreenView from '../components/screenView';

const List = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(15);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies({ page: currentPage, size: pageSize });
        setMovies(response.content);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [movies, pageSize]);

  const handlePagination = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <ScreenView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Year</DataTable.Title>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Winner</DataTable.Title>
        </DataTable.Header>
        {movies.map((movie, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{movie.id}</DataTable.Cell>
            <DataTable.Cell>{movie.year}</DataTable.Cell>
            <DataTable.Cell>{movie.title}</DataTable.Cell>
            <DataTable.Cell>{movie.winner ? 'Yes' : 'No'}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination
          page={currentPage}
          numberOfPages={totalPages}
          onPageChange={handlePagination} />
      </DataTable>
    </ScreenView>

  )
};

export default List;

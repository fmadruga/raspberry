import { IMovie, IMovieFilters } from "../interfaces/movie";
import { IProducerInterval } from "../interfaces/producer";
import { IStudio } from "../interfaces/studio";
import { IYearProjection } from "../interfaces/yearProjection";
import api from "./api";

export const yearsWithMultipleWinners = async (): Promise<IYearProjection[]> => {
  const response = await api.get('?projection=years-with-multiple-winners');
  return response.data.years;
}

export const studiosWithWinners = async (): Promise<IStudio[]> => {
  const response = await api.get('?projection=studios-with-win-count');
  return response.data.studios;
}

export const intervalForProducers = async (): Promise<IProducerInterval> => {
  const response = await api.get('?projection=max-min-win-interval-for-producers');
  return response.data;
}

export const winnersByYear = async (filter?: IMovieFilters | null): Promise<IMovie[]> => {
  const { year } = filter || {};

  let queryParams: string = '';
  if (year !== undefined) queryParams = `year=${year}`;

  const response = await api.get(`?winner=true&${queryParams}`);
  return response.data;
}
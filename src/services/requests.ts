import { IProducer, IProducerInterval } from "../interfaces/producer";
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

export const intervalForProducers = async (): Promise<IProducer[]> => {
  const response = await api.get('?projection=max-min-win-interval-for-producers');
  return response.data;
}
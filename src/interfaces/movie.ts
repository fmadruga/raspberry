export interface IMovie {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export interface IMovieFilters {
  winner?: boolean;
  year?: number;
  page?: number;
  size?: number;
}
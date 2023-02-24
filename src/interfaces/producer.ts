export interface IProducer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export interface IProducerInterval {
  max: IProducer[],
  min: IProducer[]
}
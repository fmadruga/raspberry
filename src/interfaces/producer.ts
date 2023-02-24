export interface IProducer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export interface IProducerInterval {
  min: IProducer[],
  max: IProducer[],
}
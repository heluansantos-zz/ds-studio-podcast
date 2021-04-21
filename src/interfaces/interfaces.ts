export interface IEpisode {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

export interface IHomeProps {
  allEpisodes: IEpisode[];
  latestEpisodes: IEpisode[];
}
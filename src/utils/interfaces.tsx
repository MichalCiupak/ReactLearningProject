export interface ICharacter {
  id: number;
  name: string;
  species: string;
}

export interface IEpisode {
  id: number;
  episode: string;
  name: string;
  air_date: string;
}

export interface ILocation {
  id: number;
  name: string;
}

export interface ICharacterDetails {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
}

export interface IEpisodeApiResponse {
  episodes: {
    results: IEpisode[];
  };
}

export interface ICharacterApiResponse {
  episodes: {
    results: {
      characters: ICharacter[];
    }[];
  };
}

export interface ICharacterDetailsApiResponse {
  character: ICharacterDetails;
}



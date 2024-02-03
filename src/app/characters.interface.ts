interface Episode {
  [index: number]: string;
}

interface Location {
  name: string;
  url: string;
}

export interface Character {
  created: string;
  episode: Episode;
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}

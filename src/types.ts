export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  created: string;
  // episode: Array<any>;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  resindents: Array<any>;
}

export interface Resident {
  id: number;
  name: string;
}

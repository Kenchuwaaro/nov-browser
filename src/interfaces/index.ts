// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Novel = {
  id: number;
  writerId: number;
  fav: number;
  view: number;
  title: string;
  image: string;
  synopsis: string;
  chapters: Chapter[];
}

export type Chapter = {
  id: number;
  title: string;
  episodes: Episode[];
}

export type Episode = {
  id: number;
  title: string;
}

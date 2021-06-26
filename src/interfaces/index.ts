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
  favorite: boolean;
}

export type Chapter = {
  id: number;
  number: number;
  title?: string;
  synopsis?: string;
  episodes: Episode[];
}

export type Episode = {
  id: number;
  title: string;
}

export type EpisodeData = {
  head: Episode;
  text: string;
};

export type Comment = {
  id: number;
  comment: string;
  authorId: number;
  authorName: string;
  good: boolean;
  bad: boolean;
  goodCount: number;
  responses?:  Comment[];
}

export type CommentRoom =  {
  id: number;
  name: string;
  comments: Comment[];
}
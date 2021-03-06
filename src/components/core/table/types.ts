export type Movie = {
  Title: string;
  Year: number;
  imdbID: string;
};

export type TableItem = Movie & {
  isFavourite: boolean;
};

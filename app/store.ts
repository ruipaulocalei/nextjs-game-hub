export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
  }

interface GameQueryStore{
    gameQuery: GameQuery
}
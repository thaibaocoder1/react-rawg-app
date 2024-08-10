import { FetchResponse } from "@services/axiosClient";
import gamesService from "@services/gamesService";
import { Game } from "entities/Game";
import useGameQueryStore from "@state/store";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
  });
};

export default useGames;

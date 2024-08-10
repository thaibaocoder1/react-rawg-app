import genresService from "@services/genresService";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: ms("24h"),
  });

export default useGenres;

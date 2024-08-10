import platformsService from "@services/platformsService";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: ms("24h"),
  });

export default usePlatforms;

import screenshotService from "@services/screenshotService";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => screenshotService(gameId).getAll(),
  });

export default useScreenshots;

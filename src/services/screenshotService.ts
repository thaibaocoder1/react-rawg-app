import { Screenshot } from "@entities/Screenshot";
import APIClient from "./axiosClient";

const screenshotService = (gameId: number) =>
  new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

export default screenshotService;

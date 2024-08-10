import APIClient from "./axiosClient";
import { Game } from "../entities/Game";

export default new APIClient<Game>("/games");

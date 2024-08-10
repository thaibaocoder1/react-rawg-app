import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  description_raw: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

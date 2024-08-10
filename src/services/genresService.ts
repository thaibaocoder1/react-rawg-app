import APIClient from "./axiosClient";
import { Genre } from "../entities/Genre";

export default new APIClient<Genre>("/genres");

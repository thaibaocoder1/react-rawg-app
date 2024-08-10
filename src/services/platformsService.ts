import APIClient from "./axiosClient";
import { Platform } from "../entities/Platform";

export default new APIClient<Platform>("/platforms/lists/parents");

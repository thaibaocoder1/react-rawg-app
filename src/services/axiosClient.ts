import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b05a0eaafe0402e9e0a1f59af290373",
  },
});
class APIClient<T> {
  constructor(public endpoint: string) {}
  getAll = (config: AxiosRequestConfig = {}) => {
    return axiosClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (slug: string | number) => {
    return axiosClient
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };
}

export default APIClient;

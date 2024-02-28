import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ee30594dde1a49b0a44507a4b4f742e7',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config);
    return res.data;
  };
  get = async (id: number | string) => {
    const res = await axiosInstance
      .get<T>(`${this.endpoint}/${id}`);
    return res.data;
  };
}

export default APIClient;

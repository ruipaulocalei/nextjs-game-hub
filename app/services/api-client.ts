import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }  

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ee30594dde1a49b0a44507a4b4f742e7'
    }
})
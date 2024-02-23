import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: async () => {
      const res = await apiClient.get<FetchResponse<Platform>>(
        '/platforms/lists/parents'
      );
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
//useData<Platform>('/platforms/lists/parents')

export default usePlatforms;

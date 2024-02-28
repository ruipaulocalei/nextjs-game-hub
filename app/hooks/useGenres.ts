'use client';
import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000,
  });
//useData<Genre>('/genres')

export default useGenres;

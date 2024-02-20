'use client';
import useGenres, { Genre } from '../hooks/useGenres'

const GenreList = () => {
    const {data: genres, isLoading, error} = useGenres()
  return (
    <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
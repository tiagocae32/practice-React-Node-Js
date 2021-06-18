import { useEffect, useState } from 'react';
import { getSingleMovie } from '../services/getSingleMovie';
import {useMovies} from "../hooks/useMovies"

export function useSingleMovie( id ) {
    const { movies } = useMovies();
    const [loading,setLoading] = useState(false);

	const movieFromCache = movies.find((singleMovie) => singleMovie.id === id);

	const [movie, setMovie] = useState(movieFromCache);

    useEffect(() => {
        if (!movie) {
            setLoading(true)
			getSingleMovie( id ).then((movie) => {
                setMovie(movie);
                setLoading(false)
            }).catch((err) => {
                console.log(err.response.data.message)
            });
		}
	}, [movie,id]);

	return {
        movie,
        loading,
	};
}

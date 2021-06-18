import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../context/moviesContext';
import { getMovies } from '../services/getMovies';

const INITIAL_PAGE = 0;

export const useMovies = () => {
	const { movies, setMovies } = useContext(MoviesContext);
    const [loading,setLoading] = useState(false);

	const [page, setPage] = useState(INITIAL_PAGE);
	const [loadingNextPage, setLoadingNextPage] = useState(false);

	useEffect(() => {
		setLoading(true);
        getMovies().then((data) => {
            setMovies(data);
			setLoading(false);
        });
	}, [setMovies]);

    /*
	useEffect(() => {
		if (page === INITIAL_PAGE) return;

		setLoadingNextPage(true);

		getMovies({ keyword, page }).then((nextGifs) => {
			setMovies((prevGifs) => prevGifs.concat(nextGifs));
			setLoadingNextPage(false);
		});
	}, [page, keyword, setMovies]);
    */
	return { movies, loading, loadingNextPage, setPage };
};

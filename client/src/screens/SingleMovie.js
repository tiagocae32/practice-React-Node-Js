import React from 'react';
import { Movie } from "../components/Movie"
import {MessageError} from "../components/MessageError"
import { useSingleMovie } from '../hooks/useSingleMovie';

export const SingleMovie = ({ params }) => {
    const { movie,loading} = useSingleMovie(params.id)

    if (!movie) return <MessageError message="Movie not found"/>;

	return (
        <>
            {loading && <h1>Cargando el detalle de tu pelicula</h1>}
            <Movie director={movie.director} nombre={movie.nombre} fecha_estreno={movie.fecha_estreno} pais_origen={movie.pais_origen} link_imagen={movie.link_imagen} id={movie.idMovie}  />
		</>
	);
};



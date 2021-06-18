import React,{ useEffect } from 'react'
import {MessageError} from "../components/MessageError"
import {Link} from "wouter"
import {Movies} from "./Movies"
import { useMovieSearch } from '../hooks/useGetMovieSearch'

export function ListOfMoviesSearched({ params }) {
    const { nombre } = params
    const { movieSearch,loading,error,getMovie } = useMovieSearch(nombre)
    
    const { fecha_estreno,link_imagen,nombre: nombreMovie,pais_origen,id,director } = movieSearch


    useEffect(() => {
        getMovie() 
    },[])
    
    if (error) return <MessageError message="Movie not found"/>

    return (
        <>
            {loading ? <h1>Loading...</h1> : null}
                <Movies director={director} title={nombreMovie} year={fecha_estreno} pais={pais_origen} img={link_imagen} key={id} id={id} />
            <Link to="/home">
                Go Back
            </Link>
	</>
    )
}

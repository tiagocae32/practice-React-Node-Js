import React, { useCallback, useContext, useEffect} from 'react'
import {SearchMovie} from "../components/SearchMovie"
import {Movies} from "../components/Movies"
import { useMovies } from '../hooks/useMovies'
import { Link, useLocation } from 'wouter'
import debounce from 'just-debounce-it';

import useUser from '../hooks/useUser'
import { UserContext } from '../context/usersContext'


export default function Home() {

    const { movies,loading,setPage,loadingNextPage } = useMovies()
    const [,pushLocation] = useLocation();
    
    const handleSubmit = useCallback(
        (nombre) => {
			pushLocation(`movies/search/${nombre}`);
		},
		[pushLocation]
    );
    
    const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
    };
    
    const {logout} = useUser()
    const { username } = useContext(UserContext)
    
    const handleLogOut = () => {
        logout()
        pushLocation("/")
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h1>Hello {username}</h1>
            {username ? <button className="btn btn-danger" onClick={handleLogOut}>Log out</button> : null}
            <Link
                to="/createMovie"
            >
                Crear pelicula
            </Link>
            <SearchMovie onSubmit={handleSubmit} />
            {loadingNextPage ? <h1>Loading next page...</h1> : null}
            {loading ? <h1>Loading...</h1> : null}
			{movies.length > 0 ?
				movies.map(({fecha_estreno,link_imagen,nombre,pais_origen,id,director}) => (
					<Movies director={director} title={nombre} year={fecha_estreno} pais={pais_origen} img={link_imagen} key={id} id={id}  />
                )) : "No tienes peliculas en tu catalogo"}
        </div>
    )
}

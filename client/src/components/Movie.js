import React,{ useEffect } from 'react'
import {FormEditMovie} from "../components/FormEditMovie"
import { useLocation,Link } from 'wouter'
import useActionMovies from '../hooks/useActionMovies'

export function Movie({ fecha_estreno,link_imagen,nombre,pais_origen,director,id }) {
    const {deleteMovie,deleted,updated } = useActionMovies()
    const [,navigate] = useLocation()

    useEffect(() => {
        if (deleted || updated) {
          navigate('/home')
        }
    },[navigate,deleted,updated])
    
    const deleteMov = (id) => {
        deleteMovie(id)
    }
    
    return (
        <>
                        <h1>Director: {director}</h1>
                        <h2>Title : {nombre}</h2>
                        <a target="_blank" rel="noreferrer" href={link_imagen}>Link Imagen portada</a>
                        <h3>Fecha de estreno {fecha_estreno}</h3>
                        <h4>Pais: {pais_origen}</h4>
            
            <div>
                <div>
                    <FormEditMovie fecha_estreno={fecha_estreno} link_imagen={link_imagen} nombre={nombre} pais_origen={pais_origen} director={director}
                        id={id}/>
                </div>

                <button
                    className="btn btn-danger"
                    onClick={() => deleteMov(id)}
                >
                    Eliminar
                </button>

                <Link to="/home" className="btn btn-primary">
                    Go Home
                </Link>
            </div>
        </>    
    )
}

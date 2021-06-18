import React from 'react'
import {Link} from "wouter"

export function Movies({ year,img,title,pais,id,director }) {
    return (
        <>
                        <h1>Director: {director}</h1>
                        <h2>Title : {title}</h2>
                        <a target="_blank" rel="noreferrer" href={img}>Link Imagen portada</a>
                        <h3>Fecha de estreno {year}</h3>
                        <h4>Pais: {pais}</h4>
                        <Link to={`/movie/${id}`}>
                            Ir al detalle de la pelicula
                        </Link>
        </>    
    )
}

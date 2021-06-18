import React,{ useEffect } from 'react'
import Spinner from "../components/Spinner"
import useLocation from 'wouter/use-location'
import useActionMovies from '../hooks/useActionMovies'
import { Link } from 'wouter'
import useForm from '../hooks/useForm'
import {validateForm} from "../helpers/validateForm"

export function CreateMovie() {

    const STATE_INICIAL = {
        nombre: "",
        director: "",
        pais_origen: "",
        fecha_estreno: "",
        link_imagen: "",   
    };
    const { loading,created,createMovie } = useActionMovies()

    const { valores,errorsForm,handleChange,handleSubmit,} = useForm(STATE_INICIAL,validateForm,handleSubmitCreateMovie)

    const {nombre,director,pais_origen,fecha_estreno,link_imagen} = valores
    function handleSubmitCreateMovie(){
        createMovie({nombre,director,pais_origen,fecha_estreno,link_imagen})
    };

  const [, navigate] = useLocation()
  
  useEffect(() => {
    if (created) {
      navigate('/home')
    }
  }, [created, navigate])

    return (
        <>
            <h1>Create Movie</h1>
            {loading && <Spinner/>}

            <form onSubmit={handleSubmit}>
                {errorsForm.nombre && errorsForm.nombre}
                <input value={nombre} placeholder="nombre" type="text" name="nombre" onChange={handleChange} />
                {errorsForm.director && errorsForm.director}
                <input value={director} placeholder="director" type="text" name="director" onChange={handleChange} />
                {errorsForm.pais_origen && errorsForm.pais_origen}
                <input value={pais_origen} placeholder="pais origen" type="text" name="pais_origen" onChange={handleChange} />
                {errorsForm.fecha_estreno && errorsForm.fecha_estreno}
                <input value={fecha_estreno} placeholder="fecha estreno" type="text" name="fecha_estreno" onChange={handleChange} />
                {errorsForm.link_imagen && errorsForm.link_imagen}
                <input value={link_imagen} placeholder="link de imagen" type="text" name="link_imagen"onChange={handleChange}/>
                <input type="submit" value="Enviar"/>
            </form>
            <Link to="/home">
                Go to home
            </Link>
        </>
    )
}

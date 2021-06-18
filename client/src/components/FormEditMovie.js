import React,{ useEffect} from 'react'
import { useLocation } from 'wouter'
import { validateForm } from '../helpers/validateForm'
import useActionMovies from "../hooks/useActionMovies"
import useForm from '../hooks/useForm'


export function FormEditMovie({ fecha_estreno: fecha_estreno_prop,link_imagen: link_imagen_prop,nombre: nombreProp,
    pais_origen: pais_origen_prop,director: directorProp,id }) {
  
    const STATE_INICIAL = {
        nombre : nombreProp,
        director : directorProp,
        pais_origen : pais_origen_prop,
        fecha_estreno: fecha_estreno_prop,
        link_imagen:link_imagen_prop
    }
    const { updateMovie,updated} = useActionMovies()

    const { valores,errorsForm,handleChange,handleSubmit,} = useForm(STATE_INICIAL,validateForm,handleSubmitUpdateMovie)
    const {nombre,director,pais_origen,fecha_estreno,link_imagen} = valores
    function handleSubmitUpdateMovie(){
        updateMovie(id,{nombre,director,pais_origen,fecha_estreno,link_imagen})
    };

    const [,navigate] = useLocation()

    useEffect(() => {
        if (updated) {
          navigate('/home')
        }
    },[navigate,updated])

   
    return (
        <div>
            <form
                    onSubmit={handleSubmit}
            >
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
                <input type="submit" value="Editar" className="btn btn-primary"/>
                </form>
        </div>
    )
}

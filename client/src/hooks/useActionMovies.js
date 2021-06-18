import { useState } from "react"
import { errorAlert, successAlert } from "../Alerts/sweetAlert"
import { createMovieService } from "../services/createMovie"
import { deleteMovieService } from "../services/deleteMovieService"
import { updateMovieService } from "../services/updateMovieService"

export default function useCreateMovies(){
        
    const [state,setState] = useState({ loading: false,created: false,updated:false,deleted:false })

    const createMovie = ({nombre,director,pais_origen,fecha_estreno,link_imagen}) => {
        setState({ ...state,loading: true })
        const data = {nombre,director,pais_origen,fecha_estreno,link_imagen}
        createMovieService(data)
            .then(() => {
                successAlert("Success", "Movie Created")
                setState({ ...state,loading: false,created: true})
            })
            .catch(err => {
                errorAlert("Error", "No se pudo crear la pelicula")
                setState({ ...state,loading: false,created: false })
            })
    }

    const updateMovie = ( id ,{nombre,director,pais_origen,fecha_estreno,link_imagen}) => {
        setState({ ...state, loading: true})
        const data = {nombre,director,pais_origen,fecha_estreno,link_imagen}
        updateMovieService(id, data)
            .then(() => {
                successAlert("Success", "Movie Updated")
                setState({ ...state,loading: false,updated: true})
            })
            .catch(err => {
                errorAlert("Error", "No se pudo actualizar la pelicula")
                setState({ ...state,loading: false,updated: false })
            })
    }

    const deleteMovie = id => {
        setState({...state, loading: true})
        deleteMovieService(id)
            .then(() => {
                successAlert("Success", "Movie Deleted")
                setState({ ...state,loading: false,deleted: true})   
            }).catch(() => {
                errorAlert("Error", "No se pudo borrar la pelicula")
                setState({ ...state,loading: false,deleted: false })
            })
    }

    return {
        loading: state.loading,
        created: state.created,
        updated: state.updated,
        deleted: state.deleted,
        updateMovie,
        createMovie,
        deleteMovie
    }
}
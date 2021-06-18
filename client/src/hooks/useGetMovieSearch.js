import {useState } from "react";
import { getMovieSearch } from "../services/getMovieSearch";

export const useMovieSearch = (nombre) => {

    const [movieSearch,setMovieSearch] = useState({})
    const [state,setState] = useState({
        loading: false,
        error:""
    })

    const getMovie = () => {
        setState({...state,loading:true})
        getMovieSearch(nombre).then((movie) => {
            setState({ ...state,loading: false})
            setMovieSearch(movie);
        })
            .catch((err) => {
                setState({...state,loading:false,error: err.response.data.message})
            })
    }

    return {
        movieSearch,
        loading: state.loading,
        error: state.error,
        getMovie
    }
}
import axios from 'axios';

export const getMovieSearch= async (movieName) => {
    const apiURL = `http://localhost:4000/movies/search/${movieName}`
    const res = await axios.get(apiURL);
    const {fecha_estreno,link_imagen,nombre,pais_origen,id:idMovie,director } = res.data
    return {
        fecha_estreno,link_imagen,nombre,pais_origen,idMovie,director
    }
};
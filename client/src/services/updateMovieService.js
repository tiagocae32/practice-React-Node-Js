import axios from "axios"

export async function updateMovieService(idMovie,data) {
    const apiURL = `http://localhost:4000/movies/${idMovie}`
    const res = await axios.put(apiURL,data);
    const {fecha_estreno,link_imagen,nombre,pais_origen,id,director} = res.data
    return {
        fecha_estreno,link_imagen,nombre,pais_origen,id,director
    } 
}

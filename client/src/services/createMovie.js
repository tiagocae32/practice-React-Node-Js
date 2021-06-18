import axios from "axios"
export async function createMovieService(data) {
    const apiURL = `http://localhost:4000/movies`
    const res = await axios.post(apiURL,data);
    const {fecha_estreno,link_imagen,nombre,pais_origen,id,director} = res.data
    return {
        fecha_estreno,link_imagen,nombre,pais_origen,id,director
    } 
}
  


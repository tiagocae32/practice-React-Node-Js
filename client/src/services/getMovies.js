import axios from 'axios';

export const getMovies = async ({
	limit = 5,
	nombre,
	page = 1,
} = {}) => {

    const res = await axios.get(`http://localhost:4000/movies`);

	if (Array.isArray(res.data)) {
        const movies = res.data.map((movie) => {
            const {fecha_estreno,link_imagen,nombre,pais_origen,id,director } = movie     
            return {
                id,fecha_estreno,link_imagen,nombre,pais_origen,director
            }
        });
        return movies
	}
	return [];
};

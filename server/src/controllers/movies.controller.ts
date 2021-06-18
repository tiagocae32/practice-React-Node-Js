import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Movies } from "../entity/Movies";

export const getMovies = async (req: Request,res: Response): Promise<Response> => {
    const movies = await getRepository(Movies).find();
    if (movies.length === 0) {
        return res.json({message: "No tienes peliculas en tu catalogo"})
    }
    
  return res.json(movies);
};

export const searchMovie = async (req: Request,res: Response): Promise<Response> => {
    const movie = await getRepository(Movies)
    .createQueryBuilder("user")
    .where("user.nombre = :nombre", { nombre: req.params.nombre })
        .getOne();
    if (!movie) {
        return res.status(404).json({
            message: "No se encontro la pelicula solicitada"
        })
    }
    return res.json(movie)
}

export const getMovie = async (req: Request,res: Response): Promise<Response> => {
    const movie = await getRepository(Movies).findOne(req.params.id);
    if (!movie) {
        return res.status(404).json({
            message: "Movie not found"
          })
      }
    return res.status(200).json(movie);
};

export const createMovie = async (req: Request,res: Response): Promise<Response> => {
    const newMovie = getRepository(Movies).create(req.body);
    const movie = await getRepository(Movies)
    .createQueryBuilder("movies")
    .where("movies.nombre = :nombre", { nombre: req.body.nombre })
        .getOne();
    if (movie) {
        return res.status(404).json({message: "La pelicula ya existe"})
    }
  const movieCreate = await getRepository(Movies).save(newMovie);
    if (!movieCreate) {
        return res.status(404).json({
          message: "No se pudo crear la pelicula"
      })
    }
    return res.status(201).json(movieCreate)
};

export const updateMovie = async (req: Request,res: Response): Promise<Response> => {
  const movieUpdate = await getRepository(Movies).findOne(req.params.id);
  if (movieUpdate) {
    getRepository(Movies).merge(movieUpdate, req.body);
    const newMovie = await getRepository(Movies).save(movieUpdate);
    return res.json(newMovie);
  }

  return res.json({msg: 'No se pudo actualizar la pelicula'});
};

export const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
  const movieDelete = await getRepository(Movies).delete(req.params.id);
    if (!movieDelete) {
        return res.status(404).json({
            message: "No se pudo borrar la pelicula"
        })
    }
    return res.json(movieDelete);
};

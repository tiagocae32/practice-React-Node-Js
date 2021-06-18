import { Router } from "express";
const router = Router();

import {
  getMovies,
    getMovie,
    createMovie,    
    updateMovie,
    deleteMovie,
    searchMovie
} from "../controllers/movies.controller";

router.get("/movies/", getMovies);
router.get("/movies/:id",getMovie);
router.get("/movies/search/:nombre",searchMovie)
router.post("/movies", createMovie);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default router;

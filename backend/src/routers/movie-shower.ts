import { Router } from "express";
import { getCinema, getMovie, getOneMovie, editMovie } from "../controllers/movies/controller";
import validation from "../middlewares/validation";
import { editMovieValidatorBody, editMovieValidatorParams, getOneMovieValidator } from "../controllers/movies/validator";

const router = Router()

router.get('/movie', getMovie)
router.get('/cinema', getCinema)
router.get('/movie/:id', validation(getOneMovieValidator, 2) , getOneMovie)
router.patch('/movie-patcher/:id', validation(editMovieValidatorParams, 2), validation(editMovieValidatorBody, 1), editMovie)

export default router
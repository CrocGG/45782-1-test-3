import { Router } from "express";
import { createMovie } from "../controllers/movies/controller";
import { createMovieValidator } from "../controllers/movies/validator";
import validation from "../middlewares/validation";

const router = Router()

router.post('/', validation(createMovieValidator, 1), createMovie)

export default router
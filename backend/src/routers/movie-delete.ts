import { Router } from "express";
import { annihilateMovie } from "../controllers/movies/controller";
import validation from "../middlewares/validation";
import { annihilateMovieValidator } from "../controllers/movies/validator";

const router = Router()

router.delete('/:id', validation(annihilateMovieValidator, 2), annihilateMovie)

export default router
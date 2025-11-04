import { Router } from "express";
import validation from "../middlewares/validation";
import { getAllByCategorizationValidator } from "../controllers/movies/validator";
import { extractMovie } from "../controllers/movies/controller";

const router = Router()

router.get('/:cinemaId', validation(getAllByCategorizationValidator, 2), extractMovie)

export default router
import { Router } from "express";
import validation from "../middlewares/validation";
import { getAllByCategorizationValidator } from "../controllers/meetings/validator";
import { extractMeeting } from "../controllers/meetings/controller";

const router = Router()

router.get('/:groupId', validation(getAllByCategorizationValidator, 2), extractMeeting)

export default router
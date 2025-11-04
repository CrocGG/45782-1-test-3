import { Router } from "express";
import { annihilateMeeting } from "../controllers/meetings/controller";
import validation from "../middlewares/validation";
import { annihilateMeetingValidator } from "../controllers/meetings/validator";

const router = Router()

router.delete('/:id', validation(annihilateMeetingValidator, 2), annihilateMeeting)

export default router
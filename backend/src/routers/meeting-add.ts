import { Router } from "express";
import { createMeeting } from "../controllers/meetings/controller";
import { createMeetingValidator } from "../controllers/meetings/validator";
import validation from "../middlewares/validation";

const router = Router()

router.post('/', validation(createMeetingValidator, 1), createMeeting)

export default router
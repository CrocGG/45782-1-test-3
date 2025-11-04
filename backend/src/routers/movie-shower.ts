import { Router } from "express";
import { getGroup, getMeeting, getOneMeeting, editMeeting } from "../controllers/meetings/controller";
import validation from "../middlewares/validation";
import { editMeetingValidatorBody, editMeetingValidatorParams, getOneMeetingValidator } from "../controllers/meetings/validator";

const router = Router()

router.get('/meeting', getMeeting)
router.get('/group', getGroup)
router.get('/meeting/:id', validation(getOneMeetingValidator, 2) , getOneMeeting)
router.patch('/meeting-patcher/:id', validation(editMeetingValidatorParams, 2), validation(editMeetingValidatorBody, 1), editMeeting)

export default router
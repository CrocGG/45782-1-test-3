import { Router } from "express";
import { getGroups, getMeetings } from "../controllers/meetings/controller";

const router = Router()

router.get('/meeting', getMeetings)
router.get('/group', getGroups)

export default router
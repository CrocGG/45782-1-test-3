import { Router } from "express";
import { getGroups } from "../controllers/meetings/controller";

const router = Router()

router.get('/', getGroups)

export default router
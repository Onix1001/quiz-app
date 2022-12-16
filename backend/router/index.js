import Express from "express";
import { getAllPertanyaan } from "../controller/quiz.js";

const router = Express.Router()

router.get('/', getAllPertanyaan)

export default router
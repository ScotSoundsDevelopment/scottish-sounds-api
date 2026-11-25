import { Router } from "express";
import {
    getExercises,
    getExerciseById,
    checkAnswer,
    getAnswer,
} from "../controllers/exerciseController.js";

const router = Router();

router.get("/", getExercises);
router.get("/:exerciseId", getExerciseById);
router.post("/:exerciseId/check", checkAnswer);
router.get("/:exerciseId/answer", getAnswer);

export default router;
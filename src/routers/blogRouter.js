import { Router } from "express";
import { blogController } from "../controllers/index.js";

const router = Router();
router.get("/", blogController.getAll);
router.post("/", blogController.create);

export { router as blogRoutes };

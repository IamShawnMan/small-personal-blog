import { Router } from "express";
import { blogRoutes } from "./blogRouter.js";

const router = Router();

router.use("/blog", blogRoutes);

export { router as apiRoutes };

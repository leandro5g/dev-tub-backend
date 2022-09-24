import { Router } from "express";

import { CourseController } from "../controllers/CourseController";

const CourseRouter = Router();
const courseController = new CourseController();

CourseRouter.post("/", courseController.create);
CourseRouter.get("/", courseController.index);

export { CourseRouter };

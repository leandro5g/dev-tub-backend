import { Router } from "express";

import { ClassController } from "../controllers/ClassController";

const ClassRoutes = Router();
const classController = new ClassController();

ClassRoutes.get("/:course_id", classController.index);

export { ClassRoutes };

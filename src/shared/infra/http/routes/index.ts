import { Router } from "express";

import { CourseRouter } from "@modules/course/infra/http/routes/course.routes";
import { ClassRoutes } from "@modules/class/infra/http/routes/class.routes";

const routes = Router();

routes.use("/courses", CourseRouter);
routes.use("/classes", ClassRoutes);

export { routes };

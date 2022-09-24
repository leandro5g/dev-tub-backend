import { container } from "tsyringe";

import { CourseRepository } from "@modules/course/infra/mongoose/repositories/courseRepository";
import { ICourseRepositorie } from "@modules/course/repositories/ICourseRepositorie";

container.registerSingleton<ICourseRepositorie>(
  "courseRepository",
  CourseRepository
);

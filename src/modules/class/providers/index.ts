import { container } from "tsyringe";

import { ClassRepository } from "@modules/class/infra/mongoose/repositories/ClassRepository";
import { IClassRepository } from "@modules/class/repositories/IClassRepository";

container.registerSingleton<IClassRepository>(
  "ClassRepository",
  ClassRepository
);

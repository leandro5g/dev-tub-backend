import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClassesService } from "@modules/class/services/ListClasses/ListClassesService";

class ClassController {
  public async index(request: Request, response: Response) {
    const { course_id } = request.params;

    const listClasses = container.resolve(ListClassesService);

    const classes = await listClasses.execute({
      course_id,
    });

    return response.json(classes);
  }
}

export { ClassController };

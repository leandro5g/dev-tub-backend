import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCourseService } from "@modules/course/services/CreateCourse/CreateCourseService";
import { ListCourseService } from "@modules/course/services/ListCourses/CreateCourseService";

class CourseController {
  public async create(request: Request, response: Response) {
    const { name, idPlaylist, maxResults = 30 } = request.body;

    const createCourse = container.resolve(CreateCourseService);

    const { classes, course } = await createCourse.execute({
      name,
      idPlaylist,
      maxResults,
    });

    return response.json({
      classes,
      course,
    });
  }

  public async index(request: Request, response: Response) {
    const listCourse = container.resolve(ListCourseService);

    const courses = await listCourse.execute();

    return response.json(courses);
  }
}

export { CourseController };

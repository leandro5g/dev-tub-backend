import { CourseModel, ICourse } from "../schemas/course";

import { ICreateCourseDTO } from "../../../dtos/ICreateCourseDTO";
import { ICourseRepositorie } from "../../../repositories/ICourseRepositorie";
import { IlistCoursesDTO } from "@modules/course/dtos/IlistCoursesDTO";

class CourseRepository implements ICourseRepositorie {
  public async create({
    name,
    number_of_classes,
    thumb,
  }: ICreateCourseDTO): Promise<ICourse> {
    const course = await CourseModel.create({
      name,
      number_of_classes,
      thumb,
    });

    return course;
  }

  public async list(): Promise<ICourse[]> {
    const courses = await CourseModel.find();

    return courses;
  }
}

export { CourseRepository };

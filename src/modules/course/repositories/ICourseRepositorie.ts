import { ICreateCourseDTO } from "../dtos/ICreateCourseDTO";
import { IlistCoursesDTO } from "../dtos/IlistCoursesDTO";
import { ICourse } from "../infra/mongoose/schemas/course";

interface ICourseRepositorie {
  create(data: ICreateCourseDTO): Promise<ICourse>;
  list(data: IlistCoursesDTO): Promise<ICourse[]>;
}

export { ICourseRepositorie };

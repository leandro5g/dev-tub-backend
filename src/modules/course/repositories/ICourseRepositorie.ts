import { ICreateCourseDTO } from "../dtos/ICreateCourseDTO";
import { ICourse } from "../infra/mongoose/schemas/course";

interface ICourseRepositorie {
  create(data: ICreateCourseDTO): Promise<ICourse>;
  list(): Promise<ICourse[]>;
}

export { ICourseRepositorie };

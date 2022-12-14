import { ICreateClassDTO } from "../dtos/ICreateClassDTO";
import { IInsertManyClassDTO } from "../dtos/IInsertManyClassDTO";
import { IClass } from "../infra/mongoose/schemas/class";

interface IClassRepository {
  insertMany(data: IInsertManyClassDTO[]): Promise<IClass[]>;
  findByCourse(course_id: string): Promise<IClass[]>;
}

export { IClassRepository };

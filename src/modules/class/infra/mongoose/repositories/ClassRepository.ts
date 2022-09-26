import { classModel, IClass } from "../schemas/class";

import { ICreateClassDTO } from "@modules/class/dtos/ICreateClassDTO";
import { IInsertManyClassDTO } from "@modules/class/dtos/IInsertManyClassDTO";
import { IClassRepository } from "@modules/class/repositories/IClassRepository";

class ClassRepository implements IClassRepository {
  public async insertMany(data: IInsertManyClassDTO[]): Promise<IClass[]> {
    const classes = await classModel.insertMany(data);

    return classes;
  }

  public async findByCourse(course_id: string): Promise<IClass[]> {
    const classes = await classModel.find({
      course_id,
    });

    return classes;
  }
}
export { ClassRepository };

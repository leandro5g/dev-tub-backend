import { inject, injectable } from "tsyringe";

import { IClassRepository } from "@modules/class/repositories/IClassRepository";

type IRequest = {
  course_id: string;
};

@injectable()
class ListClassesService {
  constructor(
    @inject("ClassRepository")
    private classesRepository: IClassRepository
  ) {}

  public async execute({ course_id }: IRequest) {
    const classes = await this.classesRepository.findByCourse(course_id);

    return classes;
  }
}

export { ListClassesService };

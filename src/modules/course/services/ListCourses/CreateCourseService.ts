import { inject, injectable } from "tsyringe";

import { ICourseRepositorie } from "@modules/course/repositories/ICourseRepositorie";

@injectable()
class ListCourseService {
  constructor(
    @inject("courseRepository")
    private courseRepository: ICourseRepositorie
  ) {}

  public async execute() {
    const courses = await this.courseRepository.list();

    return courses;
  }
}

export { ListCourseService };

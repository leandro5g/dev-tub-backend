import { inject, injectable } from "tsyringe";

import { ICourseRepositorie } from "@modules/course/repositories/ICourseRepositorie";
import { IPlaylistProvider } from "@shared/containers/providers/PlaylistProvider/models/IPlaylistProvider";
import { IVideoPlaylistResponseDTO } from "@shared/containers/providers/PlaylistProvider/dtos/IVideoPlaylistResponseDTO";
import { IClassRepository } from "@modules/class/repositories/IClassRepository";

type IRequest = {
  name: string;
  maxResults: number;
  idPlaylist: string;
};

@injectable()
class CreateCourseService {
  constructor(
    @inject("courseRepository")
    private courseRepository: ICourseRepositorie,
    @inject("ClassRepository")
    private classesRepository: IClassRepository,
    @inject("PlaylistProvider")
    private playlistProvider: IPlaylistProvider
  ) {}

  public async execute({ name, maxResults, idPlaylist }: IRequest) {
    const dataVideoPlaylist = await this.playlistProvider.getVideosFromPlaylist(
      {
        idPlaylist,
        maxResults,
      }
    );

    const {
      data: { pageInfo, items },
    } = dataVideoPlaylist as IVideoPlaylistResponseDTO;

    const course = await this.courseRepository.create({
      name,
      number_of_classes: pageInfo?.resultsPerPage,
      thumb: items[0]?.snippet?.thumbnails?.high?.url,
    });

    const classesFormated = items.map((classes, index) => ({
      publishedAt: classes?.snippet?.publishedAt,
      channelId: classes?.snippet?.channelId,
      title: classes?.snippet?.title,
      description: classes?.snippet?.description,
      channelTitle: classes?.snippet?.channelId,
      class_index: index + 1,
      course_id: course?._id,
      duration: classes?.contentDetails?.duration,
      url_id: classes?.id,
    }));

    const classes = await this.classesRepository.insertMany(classesFormated);

    return {
      course,
      classes,
    };
  }
}

export { CreateCourseService };

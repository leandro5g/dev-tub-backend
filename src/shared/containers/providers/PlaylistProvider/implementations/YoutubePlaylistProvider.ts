import { google } from "googleapis";

import { IPlaylistProviderDTO } from "../dtos/IPlaylistProviderDTO";
import { IVideoPlaylistResponseDTO } from "../dtos/IVideoPlaylistResponseDTO";
import { IPlaylistProvider } from "../models/IPlaylistProvider";

class YoutubePlaylistProvider implements IPlaylistProvider {
  public async getVideosFromPlaylist({
    idPlaylist,
    maxResults,
  }: IPlaylistProviderDTO): Promise<any> {
    const youtube = google.youtube({
      version: "v3",
      auth: "AIzaSyA-jrWLXTlpgMrTUaWEu4-2BhnUaD5-FD0",
    });

    const response = await youtube.playlistItems.list({
      part: ["snippet", "contentDetails"],
      playlistId: idPlaylist,
      maxResults,
    });

    const data = response.data?.items;

    const idVideos = data!.map((video: any) => video?.contentDetails?.videoId);

    return youtube.videos.list(
      {
        id: [idVideos.toString()],
        part: ["id", "snippet", "contentDetails"],
      },
      {}
    );
  }
}

export { YoutubePlaylistProvider };

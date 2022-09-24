import { IPlaylistProviderDTO } from "../dtos/IPlaylistProviderDTO";

interface IPlaylistProvider {
  getVideosFromPlaylist(data: IPlaylistProviderDTO): Promise<any>;
}

export { IPlaylistProvider };

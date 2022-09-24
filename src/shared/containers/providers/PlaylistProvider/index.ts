import { container } from "tsyringe";

import { YoutubePlaylistProvider } from "./implementations/YoutubePlaylistProvider";
import { IPlaylistProvider } from "./models/IPlaylistProvider";

const providers = {
  youtube: YoutubePlaylistProvider,
};

container.registerSingleton<IPlaylistProvider>(
  "PlaylistProvider",
  providers.youtube
);

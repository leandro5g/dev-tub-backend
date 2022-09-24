type IVideoPlaylistResponseDTO = {
  data: {
    items: {
      id: string;
      snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        thumbnails: {
          high: {
            url: string;
          };
        };
        description: string;
        channelTitle: string;
        position: string;
        videoOwnerChannelId: string;
        videoOwnerChannelTitle: string;
      };
      contentDetails: {
        duration: string;
      };
    }[];

    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
  };
};

export { IVideoPlaylistResponseDTO };

import axios from "axios";
//채널
//https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]

//연관
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=[YOUR_API_KEY]
export class RealYoutubeApi {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      timeout: 1000,
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async related(videoId) {
    return this.instance.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        relatedToVideoId: videoId,
      },
    });
  }

  async channels(channelId) {
    return this.instance.get("channels", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        id: channelId,
      },
    });
  }

  async search(keyword) {
    return this.instance.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: keyword,
      },
    });
  }

  async videos() {
    return this.instance.get("videos", {
      params: {
        part: "snippet",
        maxResults: 25,
        chart: "mostPopular",
      },
    });
  }
}

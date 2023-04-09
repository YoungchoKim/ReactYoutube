import axios from "axios";

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

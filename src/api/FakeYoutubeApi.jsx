import axios from "axios";

export class FakeYoutubeApi {
  constructor() {}

  async related() {
    return axios.get(`/videos/related.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }
  async search() {
    return axios.get(`/videos/search.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }
}

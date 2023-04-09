import axios from "axios";

export class Youtube {
  constructor(api) {
    this.api = api;
  }

  async search(keyword) {
    return keyword ? this.#searchKeyword(keyword) : this.#searchPopular();
  }

  async #searchPopular() {
    return this.api.videos().then((res) => res.data.items);
  }

  async #searchKeyword(keyword) {
    return this.api
      .search(keyword)
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export class Youtube {
  constructor(api) {
    this.api = api;
  }

  async related(videoId) {
    return this.api
      .related(videoId)
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async getChannel(channelId) {
    console.log(channelId);
    return this.api.channels(channelId).then((res) => res.data.items[0]);
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

import React from "react";
import { useLocation } from "react-router-dom";
import Channel from "../components/Channel";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const location = useLocation();
  const video = location.state.video;
  const { title, channelId, description } = video.snippet;

  return (
    <section className="ml-2 flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1&origin=http://example.com`}
          title={title}
        ></iframe>
        <div className="p-8">
          <h2 className="font-bold text-xl m-2">{title}</h2>
          <Channel channelId={channelId} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

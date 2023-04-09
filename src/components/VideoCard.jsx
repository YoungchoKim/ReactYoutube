import React from "react";
import { useNavigate } from "react-router-dom";
import * as timeago from "timeago.js";

export default function VideoCard({ video, type }) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate(`/videos/watch/${video.id}`, {
      state: {
        video: video,
      },
    });
  };
  const isList = type === "list";
  return (
    <li
      key={video.id}
      className={isList ? "flex gap-1 m-2" : "m-2"}
      onClick={handleOnclick}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      ></img>
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{timeago.format(publishedAt)}</p>
      </div>
    </li>
  );
}

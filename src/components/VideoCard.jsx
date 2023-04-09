import React from "react";

export default function VideoCard({ video }) {
  return <li key={video.id}>{video.snippet.title}</li>;
}

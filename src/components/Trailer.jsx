import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const Trailer = ({ videoId }) => {
  const opts = {
    width: "100%",
    height: "500px",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음
      modestbranding: 1,
      loop: 1,
      controls: 0,
      mute: 1,
    },
  };

  return (
    <div>
      {videoId.results.length >= 1 ? (
        <YoutubeDiv>
          <YouTube videoId={videoId?.results[0].key} opts={opts} />
        </YoutubeDiv>
      ) : (
        <div></div>
      )}
    </div>
  );
};

let YoutubeDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default Trailer;

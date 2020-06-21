import React, { useEffect,useState } from "react";
import "../../css/plyr.css";
import Plyr from "plyr";
import PropTypes from "prop-types";

function PlyrPlayer(props) {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    let player = new Plyr("#player", props.options);
    player.source = props.sources;
    player.on("timeupdate", () => {
      setCurrentTime(player.currentTime());
    });
    return () => {
      player.destroy();
    };
  }, []);
  document.cookie = "time=" + currentTime;
  console.log(currentTime);
  return (
    <video id="player" crossorigin playsinline className="js-plyr plyr"></video>
  );
}

PlyrPlayer.defaultProps = {
  options: {
    controls: [
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "fullscreen",
    ],
    i18n: {
      restart: "Restart",
      play: "Play",
      pause: "Pause",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
    },
  },
  sources: {
    type: "video",
    title: "View From A Blue Moon Trailer",
    sources: [
      {
        src:
          " ia&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA",
        type: "youtube",
        size: "576",
      },
      {
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
        type: "video/mp4",
        size: "720",
      },
      {
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
        type: "video/mp4",
        size: "1080",
      },
      {
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4",
        type: "video/mp4",
        size: "1440",
      },
    ],
    poster: "cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
    tracks: [
      {
        kind: "captions",
        label: "English",
        srclang: "en",
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
        default: true,
      },
      {
        kind: "captions",
        label: "French",
        srclang: "fr",
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
      },
    ],
  },
};

PlyrPlayer.prototype = {
  options: PropTypes.object,
  sources: PropTypes.object,
  source: PropTypes.func,
  destroy: PropTypes.func,
};

export default PlyrPlayer;

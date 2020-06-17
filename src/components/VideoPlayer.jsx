import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


const options = {
  fill: true,
  fluid: true,
  preload: 'auto',
  controlBar: {
    children: [
      'playToggle',
      'progressControl',
      'volumePanel',
      'qualitySelector',
      'fullscreenToggle',
    ],
  },
  html5: {
    hls: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true,
    },
  },
};

// console.log(options)
// eslint-disable-next-line import/prefer-default-export

const usePlayer = ({ src, controls, autoplay, fluid }) => {
  const [Time, setTime] = useState(null);
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      fluid,
      controls,
      autoplay,
      sources: src
    });

    setPlayer(vjsPlayer);
    if (player !== null) {
      player.on("timeupdate", () => {
        setTime(player.currentTime());
      });
    }
    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (player !== null) {

      player.src({ src });

    }
  }, [src]);
  // console.log(videoRef.current.currentTime);

  return videoRef;
  
};


const VideoPlayer = ({ src, controls, autoplay, options }) => {
  const playerRef = usePlayer({ src, controls, autoplay, options });

  console.log(playerRef.current)

  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js"/>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  options: PropTypes.bool
};

VideoPlayer.defaultProps = {
  controls: true,
  autoplay: false,
  options: true,
  fluid: true,
};

export default VideoPlayer;


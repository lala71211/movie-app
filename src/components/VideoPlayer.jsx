import React, { useEffect, useRef, useState } from 'react';
// import { Cookies } from 'react-cookie';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../assets/css/video.css';
// import { instanceOf } from 'prop-types';
// import PropTypes from "prop-types";
export default function VideoPlayer({ src }) {
  require('silvermine-videojs-quality-selector')(videojs);

  const videoPlayerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(null);
  const options = {
    autoplay: false,
    controls: true,
    userActions: { hotkeys: true },
    playbackRates: [0.5, 1, 1.5, 2],
    fluid:true
  };

  videojs.getComponent('ControlBar').prototype.options_ = {
    loadEvent: 'play',
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'timeDivider',
      'durationDisplay',
      'progressControl',
      'liveDisplay',
      'seekToLive',
      'remainingTimeDisplay',
      'customControlSpacer',
      'playbackRateMenuButton',
      'chaptersButton',
      'descriptionsButton',
      'subsCapsButton',
      'audioTrackButton',
      'fullscreenToggle'
    ]
  }

  useEffect(() => {
    if (videoPlayerRef) {

      const player = videojs(videoPlayerRef.current, options, () => {

        player.controlBar.removeChild('fullscreenToggle');
        player.controlBar.addChild('QualitySelector');
        player.controlBar.addChild('fullscreenToggle');
        console.log(src)
        // player.buffered(3)
        player.src([{
          src: src[0],
          label: '360p',
          // type: 'video/mp4',
          selected: true,
        },
        {
          src: src[1],
          type: 'video/mp4',
          label: '480p',

        },
          // {
          // src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
          // // type: 'video/mp4',
          // label: '720p',
          // }
        ]);
      
        //store current time when video is played 
        player.on("timeupdate", () => {
          setCurrentTime(player.currentTime());
        });
        player.buffered(30);
        //start video at a given time
        // player.currentTime(30);

      }); 
      player.responsive(true);
    }
    
    return () => { };
  }, [src]);

  document.cookie = "time=" + currentTime;
  // console.log(currentTime);
  return (
    <React.Fragment>
      <video  ref={videoPlayerRef} className="video-js" />
    </React.Fragment>
  );
};

import React, { useEffect, useState } from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import { Row } from "react-bootstrap";
import DetailCard from "../DetailCard";
// import Accordion from "./Accordion";
// import VideoPlayer from "../Player/VideoJS";
import YouTubeVideo from "../Player/YoutubePlayer";
import axios from "axios";
import { serverPath} from "../../constants/const";
import Player from "../Player/index";
import VideoPlayer from "../Player/VideoJS";
// import Iframe from 'react-iframe'
// import Frame from 'react-frame-component';

const apiPath = `${serverPath}/api`;


function SeriesMovie({ movie = [], link, episodes }) {
  
  const [dataList, setDataList] = useState([
    {
      id: 1,
      label: "mp4",
      resolution: null,
      server: "",
      src: "",
    },
    {
      id: 2,
      label: "mp4",
      resolution: null,
      server: "",
      src: "",
    },{
      id: 3,
      label: "mp4",
      resolution: null,
      server: "",
      src: "",
    },
  ]);
  const [labelServer,setLabelServer] = useState([]);
  const [soucreVideo, setSoucreVideo] = useState([]);
  const [activeLabel, setActiveLabel] = useState([]);

  useEffect(() => {
    handleEpisodeClick(1,movie.id)
  }, [episodes, movie]);

  useEffect(() => {
    let linkVideo = dataList.filter(function(item) {
      return item.server === activeLabel
   });
   let rs = [];
   linkVideo.map(item => rs.push(item.src));
   console.log(rs)
   setSoucreVideo(rs); 
  },[activeLabel])

  

  function handleEpisodeClick(episodeId, movieId) {
    axios
      .get(`${apiPath}/episode/?episodeId=${episodeId}&movieId=${movieId}`)
      .then((res) => {
        let filterServerLabel = []
        let temp = res.data.sources
        temp.forEach(item => {
          if(!filterServerLabel.includes(item.server)){
            filterServerLabel.push(item.server)
          }
        });
        setDataList(temp);
        setActiveLabel(filterServerLabel[0])
        setLabelServer(filterServerLabel)
      });
  }
 
  function getLinkByServer(serverL,dataList) {
      let linkVideo = dataList.filter(function(item) {
         return item.server === serverL
      });
      let rs = [];
      linkVideo.map(item => rs.push(item.src));
      setSoucreVideo(rs);
  }

  // function createMarkup() {
  //   return { __html: '<iframe width="640" height="360" src="https://playhydrax.com/?v=RAYFYzaJB" frameborder="0" scrolling="0" allowfullscreen></iframe>' };
  // }
  let src = ["WZHRAKVX84o","http://pzc.phimmoizz.net/embed/36d6a3c6f2af703dc1f70f1a6d07d3a3","http://pzc.phimmoizz.net/embed/c2902b186bb214f76562d78f286b2002"]
  return (
    <section className="section details">
      {/* <!-- details background --> */}
      <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
      {/* <!-- end details background --> */}
      <div className="container">
        <Row>
          <DetailCard single={false} movie={movie} />
          <div className="col-12 ">
            {/* { if (activeLabel===SERVERNAME.YOUTUBE){
              <YouTubeVideo id='FwQE6yGINKs'/> 
            }} */}
            {/* <VideoPlayer src={src} /> */}
            {/* <Iframe url={src[1]}
        width="100%"
        height="650px"
        id="LyQuangMinh"
        className="myClassname"
        display="initial"
        position="relative"
        allow="fullscreen"/> */}
        {/* <YouTubeVideo id='jWsHrfK_2-Q'/> */}
{/* {

  activeLabel===SERVERNAME.GGDRIVE? <VideoPlayer/>:
} */}
        <Player src={soucreVideo} serverName={activeLabel}/>
          </div>
          <div className="col-12">
            <div
              className="details__share"
              style={{ flexDirection: "row", display: "flex" }}
            >
              <span
                className="details__share-title"
                style={{ paddingTop: "35px" }}
              >
                Servers:
              </span>
              {labelServer.length > 0 &&
                labelServer.map((item) => {
                  return (
                    <button
                      type="button"
                      className="form__btn"
                      style={{
                        width: "100px",
                        marginRight: "15px",
                        marginLeft: "15px",
                      }}
                       onClick={()=>setActiveLabel(item)}
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="col-12">
            <div className="details__wrap">
              {/* <!-- availables --> */}
              <div
                className="details__devices"
                style={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="details__devices-title"
                  style={{ paddingTop: "35px" }}
                >
                  Tập phim:
                </span>

                {episodes.length > 0 &&
                  episodes.map((list) => {
                    return (
                      <button
                        type="button"
                        className="form__btn"
                        style={{
                          width: "50px",
                          marginRight: "15px",
                          marginLeft: "15px",
                        }}
                        onClick={() =>
                          handleEpisodeClick(list.episode_id, list.movie_id)
                        }
                      >
                        {list.episode_id}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default SeriesMovie;

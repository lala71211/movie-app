import React, { useEffect, useState } from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import { Row, Col, Button } from "react-bootstrap";
import DetailCard from "../DetailCard";
// import Accordion from "./Accordion";
import VideoPlayer from "../VideoPlayer";
import YouTubeVideo from "../YoutubePlayer";
import axios from "axios";
import { serverPath } from "../../constants/const";
import Iframe from 'react-iframe'

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
  ]);
  const [soucreVideo, setSoucreVideo] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiPath}/episode/?episodeId=1&movieId=${movie.id}`)
      .then((res) => {
        setDataList(res.data.sources);
        
        let sources = res.data.sources.map((item) => item.src)
        setSoucreVideo(sources);
      });
  }, [episodes, movie]);

  function handleEpisodeClick(episodeId, movieId) {
    axios
      .get(`${apiPath}/episode/?episodeId=${episodeId}&movieId=${movieId}`)
      .then((res) => {
        setDataList(res.data.sources);
        let sources = res.data.sources.map((item) => item.src)
        setSoucreVideo(sources);
      });
  }

  return (
    <section className="section details">
      {/* <!-- details background --> */}
      <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
      {/* <!-- end details background --> */}
      <div className="container">
        <Row>
          <DetailCard single={false} movie={movie} />
          <div className="col-12 ">
            {/* <VideoPlayer src={soucreVideo} /> */}
            {/* <Iframe url="https://lotus.vn/w/embed/post/731183825759215616.htm"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
        <YouTubeVideo id='FwQE6yGINKs'/>
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
              {dataList.length > 0 &&
                dataList.map((list) => {
                  return (
                    <button
                      type="button"
                      className="form__btn"
                      style={{
                        width: "100px",
                        marginRight: "15px",
                        marginLeft: "15px",
                      }}
                    >
                      {list.server}
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

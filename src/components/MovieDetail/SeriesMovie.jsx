import React from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import { Row, Col } from "react-bootstrap";
import MovieDetailCard from "../MovieDetailCard";
import Accordion from "./Accordion";
import VideoPlayer from "../VideoPlayer";

function SeriesMovie({ movies,link }) {
  let rs=[]
  console.log(movies)
  link.sources.map(item=>{
    rs.push({type: "video/mp4",
        src:item.src
      })
})
  return (
    <section className="section details">
      {/* <!-- details background --> */}
      <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
      {/* <!-- end details background --> */}
      <div className="container">
        <Row>
          <MovieDetailCard single={false} movie={movies} />
          {/* <!-- player --> */}
          <div className="col-12 col-xl-6">
            {/* <PlyrPlayer /> */}
            <VideoPlayer src={rs}/> 
          </div>
          {/* <!-- end player --> */}

          <Accordion />
          <div className="col-12">
            <div className="details__wrap">
              {/* <!-- availables --> */}
              <div className="details__devices">
                <span className="details__devices-title">
                  Available on devices:
                </span>
                <ul className="details__devices-list">
                  <li>
                    <i className="icon ion-logo-apple"></i>
                    <span>IOS</span>
                  </li>
                  <li>
                    <i className="icon ion-logo-android"></i>
                    <span>Android</span>
                  </li>
                  <li>
                    <i className="icon ion-logo-windows"></i>
                    <span>Windows</span>
                  </li>
                  <li>
                    <i className="icon ion-md-tv"></i>
                    <span>Smart TV</span>
                  </li>
                </ul>
              </div>
              {/* <!-- end availables --> */}

              {/* <!-- share --> */}
              <div className="details__share">
                <span className="details__share-title">
                  Share with friends:
                </span>

                <ul className="details__share-list">
                  <li className="facebook">
                    <a href="#">
                      <i className="icon ion-logo-facebook"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="#">
                      <i className="icon ion-logo-instagram"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#">
                      <i className="icon ion-logo-twitter"></i>
                    </a>
                  </li>
                  <li className="vk">
                    <a href="#">
                      <i className="icon ion-logo-vk"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- end share --> */}
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default SeriesMovie;

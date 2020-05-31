import React,{ useEffect, useState } from "react";
// import TabsContainer from "../../components/TabsContainer/test";
import { comments,  movie as movieLink } from "../../data";
import {  SeriesMovie } from "../../components/MovieDetail";
import CommentList from "../../components/CommentList"
import ReviewList from "../../components/ReviewList";
import { Tabs, TabItem } from "../../components/CustomTabs";
import Comment from "../../components/Comment"
import Gallery from "../../components/TabsContainer/Gallery"
import { serverPath } from "../../constants/const";
import axios from "axios";

const apiPath = `${serverPath}/api`;


function MoveDetailPage() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(`${apiPath}/movie/5`)
      .then(res =>
        setMovie(res.data)
      )
    // console.log(setMovies)
  }
  
  return (
    <React.Fragment>
      {/* <SingleMovie movie={movie} /> */}
      <SeriesMovie movies={movie} link ={movieLink}/>
      {/* <TabsContainer commentList={comments} sideCards={detailList} /> */}
      <Tabs activeTab="Comments">
        <TabItem label="Comments">
          <CommentList>
            {comments.map((comment) => {
              return <Comment {...comment} key={comment.id} />;
            })}
          </CommentList>
        </TabItem>
        <TabItem label="Review">
          <ReviewList></ReviewList>
        </TabItem>
        <TabItem label="Photo">
          <Gallery></Gallery>
        </TabItem>
      </Tabs>
    </React.Fragment>
  );
}

export default MoveDetailPage;

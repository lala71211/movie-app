import React,{ useEffect, useState } from "react";
// import TabsContainer from "../../components/TabsContainer/test";
import { comments,  movie } from "../../data";
import {  SeriesMovie } from "../../components/MovieDetail";
import CommentList from "../../components/CommentList"
import ReviewList from "../../components/ReviewList";
import { Tabs, TabItem } from "../../components/CustomTabs";
import Comment from "../../components/Comment"
import Gallery from "../../components/TabsContainer/Gallery"
// import { serverPath } from "../../constants/const";
// import axios from "axios";

// const apiPath = `${serverPath}/api`
function MoveDetailPage() {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function fetchData() {
  //   axios.get(`${apiPath}/movie/?pageSize=6&currentPage=1`)
  //     .then(res => res.data)
  //     .then(data => setMovies(data.content));
  // }
  return (
    <React.Fragment>
      {/* <SingleMovie movie={movie} /> */}
      <SeriesMovie movie={movie} />
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

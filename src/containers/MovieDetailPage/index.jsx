import React from "react";
// import TabsContainer from "../../components/TabsContainer/test";
import { comments,  movie } from "../../data";
import {  SeriesMovie } from "../../components/MovieDetail";
import CommentList from "../../components/CommentList"
import ReviewList from "../../components/ReviewList";
import { Tabs, TabItem } from "../../components/CustomTabs";
import Comment from "../../components/Comment"
import Gallery from "../../components/TabsContainer/Gallery"

function MoveDetailPage() {

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

import React from "react";
import HomeCarousel from "../../components/HomeCarousel";
import { TabItem, Tabs } from "../../components/CustomTabs";
import GridList from "../../components/GridList";
import DetailList from "../../components/DetailList";
import { detailList, gridList, movieCards } from "../../data";

function HomePage(props) {
  return (
    <React.Fragment>
      <HomeCarousel movies={movieCards} />
      <Tabs activeTab="New Releases">
        <TabItem label="New Releases">
          <DetailList movieList={detailList} />
        </TabItem>
        <TabItem label="Movies">
          <GridList movieList={gridList} />
        </TabItem>
        <TabItem label="TV Series">
          <GridList movieList={gridList} />
        </TabItem>
        <TabItem label="Cartoons">
          <GridList movieList={gridList} />
        </TabItem>
      </Tabs>
    </React.Fragment>
  );
}

HomePage.propTypes = {};

export default HomePage;

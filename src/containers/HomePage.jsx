import React, { useEffect, useState } from "react";
import HomeCarousel from "../components/HomeCarousel";
import { TabItem, Tabs } from "../components/CustomTabs";
import GridList from "../components/GridList";
import DetailList from "../components/DetailList";
// import { detailList, gridList, SimpleCards, movie } from "../../data";
import { serverPath } from "../constants/const";
import axios from "axios";

const apiPath = `${serverPath}/api`
function HomePage(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(`${apiPath}/movie/?pageSize=6&currentPage=1`)
      .then(res => res.data)
      .then(data => setMovies(data.content));
  }
  return (
    <React.Fragment>
      <HomeCarousel movies={movies} />
      <Tabs activeTab="New Releases">
        <TabItem label="New Releases">
          <DetailList movieList={movies} />
        </TabItem>
        <TabItem label="Movies">
          <GridList movieList={movies} />
        </TabItem>
        <TabItem label="TV Series">
          <GridList movieList={movies} />
        </TabItem>
        <TabItem label="Cartoons">
          <GridList movieList={movies} />
        </TabItem>
      </Tabs>
    </React.Fragment>
  );
}

HomePage.propTypes = {};

export default HomePage;

import React, { useEffect, useState } from "react";
import HomeCarousel from "../components/HomeCarousel";
import { TabItem, Tabs } from "../components/CustomTabs";
import GridList from "../components/GridList";
import DetailList from "../components/DetailList";
// import { detailList, gridList, SimpleCards, movie } from "../../data";
import { serverPath } from "../constants/const";
import axios from "axios";
import { data } from "jquery";

const apiPath = `${serverPath}/api`
function HomePage(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(`${apiPath}/movie/?pageSize=6&currentPage=1`)
      .then(res => res.data)
      .then(data => setMovies(data.result.content));
  }
  return (
    <React.Fragment>
      <HomeCarousel movies={movies} />
      <Tabs activeTab="Bản phát hành mới">
        <TabItem label="Bản phát hành mới">
          <DetailList movieList={movies} />
        </TabItem>
        <TabItem label="Phim Lẻ">
          <GridList movieList={movies} />
        </TabItem>
        <TabItem label="Phim Dài Tập">
          <GridList movieList={movies} />
        </TabItem>
        <TabItem label="Phim Hoạt Hình">
          <GridList movieList={movies} />
        </TabItem>
      </Tabs>
    </React.Fragment>
  );
}

HomePage.propTypes = {};

export default HomePage;

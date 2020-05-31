import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import FilterMovie from "../components/FilterMovie";

import {
  // genres as genreList,
  qualities as qualityList,
  // detailList,
} from "../data";
import CatalogList from "../components/CatalogList";
import { serverPath } from "../constants/const";

const apiPath = `${serverPath}/api`

function CatalogPage(props) {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  // console.log(props);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("abc")

 function fetchData(){
  // const genreResponse = await axios.get(`${apiPath}/genre/`);
  axios.get(`${apiPath}/movie/?pageSize=6&currentPage=1`)
  .then(res => res.data)
  .then(data=>setMovies(data.content));
  
  axios.get(`${apiPath}/genre/`)
  .then(res=>res.data)
  .then(data=>setGenres(data.content));
  // setGenres(genreResponse.content);
  // setMovies(movieResponse.content);
}
  return (
    <React.Fragment>
      <PageTitle title="Tìm Kiếm" location="Tìm Kiếm" />
      <FilterMovie qualities={qualityList} genreList={genres} />
      <CatalogList movieList={movies} />
    </React.Fragment>
  );
}

CatalogPage.propTypes = {};

export default CatalogPage;

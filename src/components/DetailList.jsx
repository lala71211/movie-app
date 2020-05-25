import React from "react";
import MovieDetailCard from "./MovieDetailCard";

function DetailList({ movieList=[] }) {
    return (
      <div className="row">
        {movieList.length>0 && movieList.map((movie) => {
          return (
            <div className="col-6 col-sm-12 col-lg-6" key={movie.id}>
              <MovieDetailCard movie={movie} />
            </div>
          );
        })}
      </div>
    );
}

DetailList.propTypes = {};

export default DetailList;

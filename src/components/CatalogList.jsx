import React from "react";
import DetailList from "../components/DetailList";


function CatalogList({ movieList }) {
  return (
    <div className="catalog">
      <div className="container">
        <DetailList movieList={movieList} />

        <div class="col-12">
          <ul class="paginator paginator--list">
            <li class="paginator__item paginator__item--prev">
              <a href="#">
                <i class="icon ion-ios-arrow-back"></i>
              </a>
            </li>
            <li class="paginator__item">
              <a href="#">1</a>
            </li>
            <li class="paginator__item paginator__item--active">
              <a href="#">2</a>
            </li>
            <li class="paginator__item">
              <a href="#">3</a>
            </li>
            <li class="paginator__item">
              <a href="#">4</a>
            </li>
            <li class="paginator__item paginator__item--next">
              <a href="#">
                <i class="icon ion-ios-arrow-forward"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatalogList;

import React from "react";
import { Pagination } from "react-bootstrap";

function Paginator({ active, total, itemsToShow = 0 }) {
  let items = [];
  for (let i = 1; i <= total; i++) {
    items.push(
      <Pagination.Item bsPrefix="paginator__item" key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  return (
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
  );
}

export default Paginator;

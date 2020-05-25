import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.min.css";
import wNumb from "wnumb";

import $ from "jquery";
import "malihu-custom-scrollbar-plugin";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "jquery-mousewheel";
// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    // const [value, setValue] = useState("");

    useEffect(() => {
      $(".scrollbar-dropdown").mCustomScrollbar({
        axis: "y",
        scrollbarPosition: "outside",
        theme: "custom-bar",
      });
    }, []);

    return (
      <ul
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {children}
      </ul>
    );
  }
);

function FilterMovie({ genreList, qualities }) {
  // console.log(genreList);
  function handleMenuItemClick(e) {
    let menuId = e.target.closest(".filter__item").getAttribute("id");
    document.querySelector(`#${menuId} .filter__item-btn input`).value =
      e.target.textContent;
  }

  const handleUpdateSlider = (index) => (
    render,
    handle,
    value,
    un,
    percent
  ) => {
    let firstValues = [
      document.getElementById("filter__imbd-start"),
      document.getElementById("filter__imbd-end"),
    ];
    let secondValues = [
      document.getElementById("filter__years-start"),
      document.getElementById("filter__years-end"),
    ];
    let sliders = [firstValues, secondValues];
    sliders[index][handle].innerHTML = value[handle];
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter__content">
              <div className="filter__items">
                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__genre">
                  <span className="filter__item-label">GENRE:</span>

                  <Dropdown.Toggle
                    // as="div"
                    className="filter__item-btn"
                    // role="navigation"
                    // id="filter-genre"
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                  >
                    <input type="button" value="Action/Adventure" />
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    as={CustomMenu}
                    className="filter__item-menu scrollbar-dropdown"
                  >
                    {genreList.map((genre) => (
                      <li
                        key={genre.id}
                        data-value={genre.name.toLowerCase()}
                        onClick={handleMenuItemClick}
                      >
                        {genre.name}
                      </li>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}

                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__quality">
                  <span className="filter__item-label">QUALITY:</span>

                  <Dropdown.Toggle
                    className="filter__item-btn"
                    role="navigation"
                    id="filter-quality"
                  >
                    <input type="button" value="HD" />
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    as={CustomMenu}
                    className="filter__item-menu scrollbar-dropdown"
                  >
                    {qualities.map((quality) => (
                      <li
                        key={quality.id}
                        data-value={quality.name.toLowerCase()}
                        onClick={handleMenuItemClick}
                      >
                        {quality.name}
                      </li>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}

                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__rate">
                  <span className="filter__item-label">IMBd:</span>

                  <Dropdown.Toggle
                    className="filter__item-btn"
                    id="filter__rate"
                  >
                    <div className="filter__range">
                    <div id="filter__imbd-start">2.5</div>
                      <div id="filter__imbd-end" >8.6</div>
                    </div>
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter__item-menu filter__item-menu--range">
                    {/* <div id="filter__imbd"></div> */}
                    <Nouislider
                      id="#filter__years"
                      range={{ min: 0, max: 10 }}
                      step={0.1}
                      connect={true}
                      start={[2.5, 8.6]}
                      format={wNumb({ decimals: 1 })}
                      onUpdate={handleUpdateSlider(0)}
                    />
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}

                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__year">
                  <span className="filter__item-label">RELEASE YEAR:</span>

                  <Dropdown.Toggle
                    className="filter__item-btn "
                    role="button"
                    id="filter-year"
                  >
                    <div className="filter__range">
                      <div id="filter__years-start" >2005</div>
                      <div id="filter__years-end"  >2015</div>
                    </div>
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter__item-menu filter__item-menu--range">
                    {/* <div id="filter__years"></div> */}
                    <Nouislider
                      range={{ min: 2000, max: 2020 }}
                      step={1}
                      connect={true}
                      start={[2005, 2015]}
                      format={wNumb({ decimals: 0 })}
                      onUpdate={handleUpdateSlider(1)}
                    />
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}
              </div>

              {/* <!-- filter btn --> */}
              <button className="filter__btn" type="button">
                apply filter
              </button>
              {/* <!-- end filter btn --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterMovie.propTypes = {};

export default FilterMovie;

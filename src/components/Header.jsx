import React, { useEffect } from "react";
import logo from "../assets/img/logo.svg";

function Header() {
  useEffect(() => {
    let searchBtn = document.querySelector(".header__search-btn");
    let headerBtn = document.querySelector(".header__btn");
    let headerNav = document.querySelector(".header__nav");
    /*==============================
	                Menu
	  ==============================*/
    // Event NavBar Button
    headerBtn.addEventListener("click", function () {
      headerBtn.classList.toggle("header__btn--active");

      headerNav.classList.toggle("header__nav--active");
      document.querySelector(".body").classList.toggle("body--active");

      if (searchBtn.classList.contains("active")) {
        searchBtn.classList.toggle("active");
        document
          .querySelector(".header__search")
          .classList.toggle("header__search--active");
      }
    });

    /*==============================
	                Search
	  ==============================*/

    // Event Search Button
    searchBtn.addEventListener("click", () => {
      searchBtn.classList.toggle("active");

      // Event show search bar
      let headerSearch = document.querySelector(".header__search");
      headerSearch.classList.toggle("header__search--active");

      if (headerBtn.classList.contains("header__btn--active")) {
        headerBtn.classList.toggle("header__btn--active");
        headerNav.classList.toggle("header__nav--active");
        document.querySelector(".body").classList.toggle("body--active");
      }
    });

    return () => {
      headerBtn.removeEventListener("click");
      searchBtn.removeEventListener("click");
    };
  }, []);

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                {/* <!-- header logo --> */}
                <a href="/" className="header__logo">
                  <img src={logo} alt="" />
                </a>
                {/* <!-- end header logo --> */}

                {/* <!-- header nav --> */}
                <ul className="header__nav">
                  {/* <!-- dropdown --> */}
                  <li className="header__nav-item">
                    <a
                      className="dropdown-toggle header__nav-link"
                      href="/"
                      role="button"
                      id="dropdownMenuHome"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>

                    <ul
                      className="dropdown-menu header__dropdown-menu"
                      aria-labelledby="dropdownMenuHome"
                    >
                      <li>
                        <a href="index.html">Home slideshow bg</a>
                      </li>
                      <li>
                        <a href="index2.html">Home static bg</a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- end dropdown --> */}

                  {/* <!-- dropdown --> */}
                  <li className="header__nav-item">
                    <a
                      className="dropdown-toggle header__nav-link"
                      href="/genre/action/1"
                      role="button"
                      id="dropdownMenuCatalog"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Genre
                    </a>

                    <ul
                      className="dropdown-menu header__dropdown-menu"
                      aria-labelledby="dropdownMenuCatalog"
                    >
                      <li>
                        <a href="catalog1.html">Catalog Grid</a>
                      </li>
                      <li>
                        <a href="catalog2.html">Catalog List</a>
                      </li>
                      <li>
                        <a href="details1.html">Details Movie</a>
                      </li>
                      <li>
                        <a href="details2.html">Details TV Series</a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- end dropdown --> */}

                  <li className="header__nav-item">
                    <a href="/update-account" className="header__nav-link">
                      Pricing Plan
                    </a>
                  </li>

                  <li className="header__nav-item">
                    <a href="faq.html" className="header__nav-link">
                      Help
                    </a>
                  </li>

                  {/* <!-- dropdown --> */}
                  <li className="dropdown header__nav-item">
                    <a
                      className="dropdown-toggle header__nav-link header__nav-link--more"
                      href="#"
                      role="button"
                      id="dropdownMenuMore"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon ion-ios-more"></i>
                    </a>

                    <ul
                      className="dropdown-menu header__dropdown-menu"
                      aria-labelledby="dropdownMenuMore"
                    >
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="/sign-in">Sign In</a>
                      </li>
                      <li>
                        <a href="/sign-up">Sign Up</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- end dropdown --> */}
                </ul>
                {/* <!-- end header nav --> */}

                {/* <!-- header auth --> */}
                <div className="header__auth">
                  <button className="header__search-btn" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>

                  <a href="/sign-in" className="header__sign-in">
                    <i className="icon ion-ios-log-in"></i>
                    <span>sign in</span>
                  </a>
                </div>
                {/* <!-- end header auth --> */}

                {/* <!-- header menu btn --> */}
                <button className="header__btn" type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                {/* <!-- end header menu btn --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- header search --> */}
      <form action="#" className="header__search">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__search-content">
                <input
                  type="text"
                  placeholder="Search for a movie, TV Series that you are looking for"
                />

                <button type="button">search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <!-- end header search --> */}
    </header>
  );
}

export default Header;

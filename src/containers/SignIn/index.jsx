import React, { useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import bgImg from "../../assets/img/section/section.jpg";

function SignIn() {
  useEffect(() => {
    /*==============================
              Section bg
    ==============================*/

    document
      .querySelectorAll(".section--bg, .details__bg")
      .forEach(function (item) {
        if (item.hasAttribute("data-bg")) {
          console.log(item.attributes);
          item.style.background = "url(" + item.getAttribute("data-bg") + ")";
          item.style.backgroundPosition = "center center";
          item.style.backgroundRepeat = "no-repeat";
          item.style.backgroundSize = "cover";
        }
      });
  }, []);

  return (
    <React.Fragment>
      <div className="sign section--bg" data-bg={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* <!-- authorization form --> */}
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src={logo} alt="" />
                  </a>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      className="sign__input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked="checked"
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </div>

                  <button className="sign__btn" type="button">
                    Sign in
                  </button>

                  <span className="sign__text">
                    Don't have an account? <a href="/sign-up">Sign up!</a>
                  </span>

                  <span className="sign__text">
                    <a href="#">Forgot password?</a>
                  </span>
                </form>
                {/* <!-- end authorization form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;

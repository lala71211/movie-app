import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function ReviewList() {
  return (
    <div className="reviews">
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__autor">
            <img className="reviews__avatar" src="img/user.png" alt="" />
            <span className="reviews__name">
              Best Marvel movie in my opinion
            </span>
            <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

            <span className="reviews__rating">
              <i className="icon ion-ios-star"></i>8.4
            </span>
          </div>
          <p className="reviews__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </li>

        <li className="reviews__item">
          <div className="reviews__autor">
            <img className="reviews__avatar" src="img/user.png" alt="" />
            <span className="reviews__name">
              Best Marvel movie in my opinion
            </span>
            <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

            <span className="reviews__rating">
              <i className="icon ion-ios-star"></i>9.0
            </span>
          </div>
          <p className="reviews__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </li>

        <li className="reviews__item">
          <div className="reviews__autor">
            <img className="reviews__avatar" src="img/user.png" alt="" />
            <span className="reviews__name">
              Best Marvel movie in my opinion
            </span>
            <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

            <span className="reviews__rating">
              <i className="icon ion-ios-star"></i>7.5
            </span>
          </div>
          <p className="reviews__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </li>
      </ul>

      <form action="#" className="form">
        <input type="text" className="form__input" placeholder="Title" />
        <textarea className="form__textarea" placeholder="Review"></textarea>
        <div className="form__slider">
          {/* <div className="form__slider-rating" id="slider__rating"></div> */}
          <Nouislider
            className="form__slider-rating"
            range={{ min: 0, max: 10 }}
            start={8.6}
            step={0.1}
            connect={[true, false]}
          />
          <div className="form__slider-value" id="form__slider-value"></div>
        </div>
        <button type="button" className="form__btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default ReviewList;

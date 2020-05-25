import React from "react";

function CommentList(props) {
  return (
    <div>
      <div class="comments">
        <ul class="comments__list">
          {props.children}
        </ul>

        <form action="#" class="form">
          <textarea
            id="text"
            name="text"
            class="form__textarea"
            placeholder="Add comment"
          ></textarea>
          <button type="button" class="form__btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentList;

import React, { Component } from "react";
import { storage } from "../constants/firebase";

class ImageLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    let pathReference = storage.refFromURL("gs://movie-app-d4c77.appspot.com/poster/");
    let starsRef = pathReference.child("cover2.jpg");

    starsRef
      .getDownloadURL()
      .then((url) => {
        let img = document.querySelector(".avatar");
        img.src = url;
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case "storage/object-not-found":
            break;

          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;

          default:
            break;
        }
      });
  }

  render() {
    return (
      <>
        <img className="avatar" alt="" />
      </>
    );
  }
}

export default ImageLoad;

import React, { Component } from "react";
import blankImg from "../../assets/file.svg";
import styles from "./ImageUpload.module.css";

export class ImageUpload extends Component {
  state = {
    profileImg: blankImg,
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles["img-holder"]}>
            <img src={profileImg} alt="" id="img" className={styles.img} />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className={styles.label}>
            <label className={styles["image-upload"]} htmlFor="input">
              <h5>Upload</h5>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;

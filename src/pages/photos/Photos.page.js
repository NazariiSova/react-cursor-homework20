import React from "react";
import styles from "./photos.module.css"

const PhotosPages = () => {

    return <div className={styles["container-photos"]}>
        <img src="https://photocentra.ru/images/main76/765428_main.jpg" className={styles["photo-in-container"]}/>
        <img src="https://photographers.ua/thumbnails/pictures/1320/800xub.jpg" className={styles["photo-in-container"]}/>
        <img src="https://avatars.mds.yandex.net/i?id=5d4a344495776af18e97f8acf96d8de2a2cf1cf0-8425275-images-thumbs&n=13" className={styles["photo-in-container"]}/>
        <img src="https://i.photographers.ua/thumbnails/pictures/29105/240x13_78.jpg" className={styles["photo-in-container"]}/>
        <img src="https://i.photographers.ua/thumbnails/pictures/29105/240x8180358.jpg" className={styles["photo-in-container"]}/>
        <img src="https://i.photographers.ua/thumbnails/pictures/29105/240x8842711.jpg" className={styles["photo-in-container"]}/>

    </div>
}

export default PhotosPages;
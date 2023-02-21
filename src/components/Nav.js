import React from "react";
import { Link } from "react-router-dom";
import styles from "./headlines.module.css"

const Nav = () => {
    return (
        <header>

<Link to="/main" className={styles["headlines"]}>головна (зображення і текст)</Link>
<Link to="/publications" className={styles["headlines"]}>сторінка публікацій</Link>
<Link to="/photos" className={styles["headlines"]}>сторінка з фотографіями</Link>
<Link to="/contacts" className={styles["headlines"]}>сторінка з контактами з другої домашки.</Link>

        </header>
    )
}

export default Nav;
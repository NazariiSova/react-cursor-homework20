import styles from "./publications.module.css";


const Post = ({
  author,
  content,
  date,
  image,
  comments,
  reposts,
  likes,
  downloads,
}) => {
  
  return (
    <div className={styles["container"]}>
        
      <div className={styles["post"]}>

        <div className={styles["post-header"]}>
          <img className={styles["author-photo"]} src={author.photo} alt="authot photo" />
          <div className={styles["author-name"]}>{author.name}</div>
          <img className={styles["post-header-icon"]} src="./img/origіn-32.png" />
          <div className={styles["post-header-nickname"]}>{author.nickname}</div>
          <div className={styles["post-header-date"]}>{date}</div>
        </div>

        <div className={styles["post-body"]}>
          <div className={styles["content-text"]}>{content}</div>
          <img className={styles["content-img"]} src={image} alt="content image" />
        </div>

        <div className={styles["post-footer"]}>
          <ul className={styles["post-footer-ul"]}>
            <li className={styles["post-footer-li"]}>
              {" "}
              <img
                className={styles["post-footer-icon"]}
                src="./img/comments-50.png"
                alt=""
              />{" "}
              {comments}
            </li>
            <li className={styles["post-footer-li"]}>
              {" "}
              <img
                className={styles["post-footer-icon"]}
                src="./img/repeat-50.png"
                alt=""
              />{" "}
              {reposts}
            </li>
            <li className={styles["post-footer-li"]}>
              {" "}
              <img
                className={styles["post-footer-icon"]}
                src="./img/heart-50.png"
                alt=""
              />{" "}
              {likes}
            </li>
            <li className={styles["post-footer-li"]}>
              {" "}
              <img
                className={styles["post-footer-icon"]}
                src="./img/download-50.png"
                alt=""
              />{" "}
              {downloads}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;

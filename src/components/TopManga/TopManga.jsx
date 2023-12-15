import React from "react";
import styles from "./TopManga.module.scss";
import { Link } from "react-router-dom";

function TopManga(props) {
  return (
    <Link to={`/manga/${props.idManga}`}>
      <div className={styles.topMangaContainer}>
        <img src={`http://localhost:5001/image/${props.coverImageManga}`} />
        <div className={styles.topMangaInfoContainer}>
          <span>{props.titleManga}</span>
          <p>3 просмотра</p>
        </div>
      </div>
    </Link>
  );
}

export default TopManga;

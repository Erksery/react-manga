import React from "react";
import styles from "./TopManga.module.scss";

function TopManga(props) {
  return (
    <div className={styles.topMangaContainer}>
      <img src={`http://localhost:5001/image/${props.coverImageManga}`} />
      <div className={styles.topMangaInfoContainer}>
        <span>{props.titleManga}</span>
        <p>3 просмотра</p>
      </div>
    </div>
  );
}

export default TopManga;

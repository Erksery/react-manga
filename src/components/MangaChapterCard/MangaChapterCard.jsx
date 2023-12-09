import React from "react";
import styles from "./MangaChapterCard.module.scss";
import { Link } from "react-router-dom";

function MangaChapterCard({
  titleManga,
  coverImageManga,
  numberChapter,
  idManga,
}) {
  return (
    <Link to={`/manga/${idManga}`}>
      <div className={styles.mangaChapterCard}>
        <img src={`http://localhost:5001/image/${coverImageManga}`} />
        <div className={styles.mangaChapterInfoContaienr}>
          <div>
            <span>{titleManga}</span>
            <p>Новая глава: {numberChapter}</p>
          </div>
          <p>7 часов назад</p>
        </div>
      </div>
    </Link>
  );
}

export default MangaChapterCard;

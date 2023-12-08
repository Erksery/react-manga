import React from "react";
import styles from "./MangaChapterCard.module.scss";

function MangaChapterCard({ titleManga, coverImageManga }) {
  return (
    <div className={styles.mangaChapterCard}>
      <img src={`http://localhost:5001/image/${coverImageManga}` } />
      {titleManga}
    </div>
  );
}

export default MangaChapterCard;

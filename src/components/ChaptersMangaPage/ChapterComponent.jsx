import React from "react";
import styles from "./ChaptersMangaPage.module.scss";
import { Link } from "react-router-dom";

function ChapterComponent(props) {
  
  return (
    <Link to={`/manga/${id}/chapters/${props.idChapter}`} className={styles.chapterContainer} >
      <p>Глава: {props.numberChapter}</p>
      <p className={styles.dateChapter}>15.10.2023</p>
    </Link>
  );
}

export default ChapterComponent;

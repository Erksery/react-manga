import React from "react";
import styles from "./ChaptersMangaPage.module.scss";
import { Link, useParams } from "react-router-dom";

function ChapterComponent(props) {
  const { id } = useParams();
  const date = new Date(props.dateCreateChapter);
  const monthDate = date.toLocaleString("ru");

  const formatingDate = `${monthDate}`;

  return (
    <Link
      to={`/manga/${id}/chapters/${props.idChapter}`}
      className={styles.chapterContainer}
    >
      <p>Глава: {props.numberChapter}</p>
      <p className={styles.dateChapter}>{formatingDate}</p>
    </Link>
  );
}

export default ChapterComponent;

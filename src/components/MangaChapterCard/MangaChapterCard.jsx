import React from "react";
import styles from "./MangaChapterCard.module.scss";
import { Link } from "react-router-dom";
import { getWordForNumber } from "../../getWordForNumber.js";

function MangaChapterCard({
  titleManga,
  coverImageManga,
  numberChapter,
  idManga,
  difference,
}) {
  const temporaryParsing = (time) => {
    return time <= 1440 && time >= 60
      ? `${Math.floor(time / 60)} ${getWordForNumber(
          Math.floor(time / 60),
          "час",
          "часа",
          "часов",
          "час"
        )}`
      : time <= 60
      ? `${time} ${getWordForNumber(
          Math.floor(time),
          "минута",
          "минуты",
          "минут",
          "минуту"
        )}`
      : `${Math.floor(time / 60 / 24)} ${getWordForNumber(
          Math.floor(time / 60 / 24),
          "день",
          "дня",
          "дней",
          "день"
        )}`;
  };

  return (
    <Link to={`/manga/${idManga}`}>
      <div className={styles.mangaChapterCard}>
        <img src={`http://localhost:5001/image/${coverImageManga}`} />
        <div className={styles.mangaChapterInfoContainer}>
          <div>
            <span>{titleManga}</span>
            <p>Новая глава: {numberChapter}</p>
          </div>
          <p>{temporaryParsing(difference)} назад</p>
        </div>
      </div>
    </Link>
  );
}

export default MangaChapterCard;

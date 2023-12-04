import React from "react";
import styles from "./InfoMangaPage.module.scss";

function InfoMangaPage(props) {
  return (
    <div className={styles.infoMangaContainer}>
      <div>
        <span>Тип</span>
        <p>{props.typeManga}</p>
      </div>
      <div>
        <span>Статус тайтла</span>
        <p>{props.translateStatusManga}</p>
      </div>
      <div>
        <span>Формат</span>
        <p>{props.formatManga}</p>
      </div>
      <div>
        <span>Статус перевода</span>
        <p>{props.translateStatusManga}</p>
      </div>
      <div>
        <span>Дата релиза</span>
        <p>{props.yearManga}</p>
      </div>
      <div>
        <span>Автор</span>
        <p>{props.authorManga}</p>
      </div>
      <div>
        <span>Художник</span>
        <p>{props.painterManga}</p>
      </div>
    </div>
  );
}

export default InfoMangaPage;

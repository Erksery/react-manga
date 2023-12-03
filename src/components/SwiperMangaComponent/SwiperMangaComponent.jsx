import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import MangaCard from "../MangaCard/MangaCard";
import styles from "./SwiperMangaComponent.module.scss";

function SwiperMangaComponent({ dataManga }) {
  return (
    <ScrollContainer className={styles.scrollContainer}>
      {dataManga &&
        dataManga.map((manga) => <MangaCard key={manga.idManga} {...manga} />)}
    </ScrollContainer>
  );
}

export default SwiperMangaComponent;

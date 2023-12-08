import React from "react";
import { useGetMangaChapterAdded } from "../../hooks/useGetMangaChapterAdded";
import styles from "./MangaChapterAdded.module.scss";
import MangaChapterCard from "../MangaChapterCard/MangaChapterCard";

function MangaChapterAdded() {
  const { mangaChapterAddedData, isLoadingMangaChapterAdded } =
    useGetMangaChapterAdded();

  return (
    <div className={styles.mangaChapterAddedComponent}>
      {mangaChapterAddedData &&
        mangaChapterAddedData.map((mangaChapter) => (
          <MangaChapterCard {...mangaChapter} />
        ))}
    </div>
  );
}

export default MangaChapterAdded;

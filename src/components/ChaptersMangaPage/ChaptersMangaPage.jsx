import React from "react";
import styles from "./ChaptersMangaPage.module.scss";
import { useGetChaptersManga } from "../../hooks/useGetChaptersManga";
import ChapterComponent from "./ChapterComponent";

function ChaptersMangaPage() {
  const { chaptersData, isLoadingChaptersData } = useGetChaptersManga();

  if (chaptersData.length === 0)
    return (
      <div className={styles.nullChapters}>
        <p>Глав не завезли</p>
      </div>
    );

  if (isLoadingChaptersData) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className={styles.container}>
      {chaptersData.map((chapter) => (
        <ChapterComponent key={chapter.idChapter} {...chapter} />
      ))}
    </div>
  );
}

export default ChaptersMangaPage;

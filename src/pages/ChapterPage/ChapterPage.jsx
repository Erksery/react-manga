import React from "react";
import styles from "./ChapterPage.module.scss";
import { useGetChaptersManga } from "../../hooks/useGetChaptersManga";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import { useGetActiveChapter } from "../../hooks/useGetActiveChapter";

function ChapterPage() {
  const { activeChapterData, isLoadingChapterData } = useGetActiveChapter();

  if (isLoadingChapterData) {
    return <h3>Loading...</h3>;
  }
  const arrayChapterImage = JSON.parse(activeChapterData.imagesChapter);

  return (
    <BaseComponent>
      <div className={styles.chapterPageContainer}>
        {arrayChapterImage.map((image) => {
          console.log(image);
        })}
      </div>
    </BaseComponent>
  );
}

export default ChapterPage;

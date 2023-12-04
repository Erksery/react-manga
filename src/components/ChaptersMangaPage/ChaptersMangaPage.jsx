import React from "react";
import styles from "./ChaptersMangaPage.module.scss";
import { useGetChaptersManga } from "../../hooks/useGetChaptersManga";

function ChaptersMangaPage() {
  const { chaptersData } = useGetChaptersManga();

  if (chaptersData.length === 0) return <h2>Глав не завезли</h2>;

  return (
    <div>
      {chaptersData.map((chapter) => (
        <div>
          <p>{chapter.numberChapter}</p>
        </div>
      ))}
    </div>
  );
}

export default ChaptersMangaPage;

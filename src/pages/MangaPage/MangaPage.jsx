import React from "react";
import { useParams } from "react-router";
import { useGetActiveManga } from "../../hooks/useGetActiveManga";
import styles from "./MangaPage.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import {
  Icon36Favorite,
  Icon28BookSpreadOutline,
  Icon28AddOutline,
} from "@vkontakte/icons";
import TabsMangaPage from "../../components/TabsMangaPage/TabsMangaPage";
import Description from "../../components/Description/Description";
import InfoMangaPage from "../../components/InfoMangaPage/InfoMangaPage";

function MangaPage() {
  const { dataActiveManga, isLoadingActiveData } = useGetActiveManga();
  const { titleManga, coverImageManga, titleEnglish, rateManga, summaryManga } =
    dataActiveManga;

  return (
    <>
      <BaseComponent>
        <div className={styles.mangaPage}>
          <div className={styles.mangaBanner}>
            <img />
          </div>
          <div className={styles.mangaContainer}>
            <div className={styles.sideContainer}>
              <div className={styles.coverContainer}>
                {coverImageManga && (
                  <img
                    className={styles.coverImage}
                    src={`http://localhost:5001/image/${coverImageManga}`}
                    alt="..."
                  />
                )}
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.buttonRead}>
                  <Icon28BookSpreadOutline width={25} />
                  Начать читать
                </button>
                <button className={styles.buttonAddBookMarks}>
                  <Icon28AddOutline width={25} />
                  Добавить в список
                </button>
              </div>
              <InfoMangaPage {...dataActiveManga} />
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.nameMangaContainer}>
                <div>
                  <h2>{titleManga}</h2>
                  <h3>{titleEnglish}</h3>
                </div>
                <div>
                  <div className={styles.favoriteContainer}>
                    <Icon36Favorite color="#0068df" width={25} />
                    <h2 style={{ fontSize: 24 }}>{rateManga}.5</h2>
                    <p>(1.8k)</p>
                  </div>
                </div>
              </div>
              <div className={styles.mangaContent}>
                <TabsMangaPage str={summaryManga} />
              </div>
            </div>
          </div>
        </div>
      </BaseComponent>
    </>
  );
}

export default MangaPage;

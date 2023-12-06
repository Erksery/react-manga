import React, { useEffect, useState } from "react";
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
import InfoMangaPage from "../../components/InfoMangaPage/InfoMangaPage";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useGetUserData } from "../../hooks/useGetUserData";

function MangaPage() {
  const [activeBookMark, setActiveBookMark] = useState(false);
  const [cookies] = useCookies(["AuthData"]);
  const { bookMarks, isLoadingUserData } = useGetUserData();
  const { id } = useParams();
  const { dataActiveManga, isLoadingActiveData } = useGetActiveManga();
  const {
    titleManga,
    coverImageManga,
    titleEnglish,
    rateManga,
    summaryManga,
    idManga,
  } = dataActiveManga;

  const handleAddBookMarks = async () => {
    console.log("bookMark", activeBookMark, bookMarks);

    await axios
      .post("/api/addBookMarks", {
        idManga: idManga,
        idUser: cookies.AuthData.idUser,
        id: id,
        image: coverImageManga,
        title: titleManga,
      })
      .then((res) => {
        setActiveBookMark(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  const handleRemoveBookMark = async () => {
    await axios
      .post("/api/removeBookMark", {
        idManga: +id,
        idUser: +cookies.AuthData.idUser,
      })
      .then((res) => {
        console.log(res);
        setActiveBookMark(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isLoadingUserData) console.log("load");
    else {
      const result = bookMarks.find((b) => b.idManga === +id);
      setActiveBookMark(result != undefined ? true : false);
    }
  }, [bookMarks, id, isLoadingActiveData]);

  return (
    <>
      <BaseComponent>
        <div className={styles.mangaPage}>
          <div
            style={{
              backgroundImage:
                "url('https://cover.imglib.info/uploads/anime/20545/background/d77470a7-628f-470c-a18d-7df6ab52f844.jpg')",
            }}
            className={styles.mangaBanner}
          />
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
                {!activeBookMark ? (
                  <button
                    onClick={handleAddBookMarks}
                    className={styles.buttonAddBookMarks}
                  >
                    <Icon28AddOutline width={25} />
                    Добавить в список
                  </button>
                ) : (
                  <button
                    onClick={handleRemoveBookMark}
                    className={styles.buttonAddBookMarks}
                  >
                    <Icon28AddOutline width={25} />
                    Добаленно
                  </button>
                )}
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
                <TabsMangaPage id={id} str={summaryManga} />
              </div>
            </div>
          </div>
        </div>
      </BaseComponent>
    </>
  );
}

export default MangaPage;

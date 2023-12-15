import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetActiveManga } from "../../hooks/useGetActiveManga";
import styles from "./MangaPage.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import {
  Icon36Favorite,
  Icon28BookSpreadOutline,
  Icon28AddOutline,
  Icon20Check,
} from "@vkontakte/icons";
import TabsMangaPage from "../../components/TabsMangaPage/TabsMangaPage";
import InfoMangaPage from "../../components/InfoMangaPage/InfoMangaPage";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useGetUserData } from "../../hooks/useGetUserData";
import { useAuth } from "../../hooks/useAuth";
import FavoriteModal from "../../components/FavoriteModal/FavoriteModal";

function MangaPage() {
  const [activeFavoriteModal, setActiveFavoriteModal] = useState(false);
  const [ratingsManga, setRatingsManga] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [activeBookMark, setActiveBookMark] = useState(false);
  const [cookies] = useCookies(["AuthData"]);
  const { bookMarks, isLoadingUserData } = useGetUserData();
  const { isAuth } = useAuth();
  const { id } = useParams();
  const { dataActiveManga, isLoadingActiveData } = useGetActiveManga();
  const { navigate } = useNavigate();
  const {
    titleManga,
    coverImageManga,
    bannerImageManga,
    titleEnglish,
    summaryManga,
    idManga,
    genresManga,
    tagsManga,
  } = dataActiveManga;

  const handleAddBookMarks = async () => {
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

    async function getRateManga() {
      const resData = await axios
        .get("/api/mangaRating", { params: { idManga: id } })
        .then((res) => {
          setRatingsManga(res.data);
          console.log(res.data);
        });
      if (ratingsManga.length !== 0) {
        const resultRatingManga = (ratingsManga) =>
          ratingsManga &&
          ratingsManga.reduce((acc, number) => acc + number.ratingCount, 0) /
            ratingsManga.length;
        setOverallRating(resultRatingManga(ratingsManga));
      } else {
        setOverallRating(0);
      }

      return resData;
    }
    getRateManga();
  }, [bookMarks, id, isLoadingActiveData]);

  return (
    <>
      <BaseComponent>
        <div className={styles.mangaPage}>
          <div
            style={{
              backgroundImage: `url('http://localhost:5001/image/${bannerImageManga}')`,
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
                    loading="lazy"
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
                    className={styles.buttonAddedBookMarks}
                  >
                    <Icon20Check width={25} />
                    Добавлено
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
                  <div
                    onClick={() => setActiveFavoriteModal(true)}
                    className={styles.favoriteContainer}
                  >
                    <Icon36Favorite color="#0068df" width={25} />
                    <h2 style={{ fontSize: 24 }}>{overallRating.toFixed(1)}</h2>
                    <p>({ratingsManga.length})</p>
                  </div>
                  <FavoriteModal
                    idManga={id}
                    idUser={cookies.AuthData.idUser}
                    activeFavoriteModal={activeFavoriteModal}
                    setActiveFavoriteModal={setActiveFavoriteModal}
                  />
                </div>
              </div>
              <div className={styles.mangaContent}>
                <TabsMangaPage
                  id={id}
                  str={summaryManga}
                  genres={genresManga}
                  tags={tagsManga}
                />
              </div>
            </div>
          </div>
        </div>
      </BaseComponent>
    </>
  );
}

export default MangaPage;

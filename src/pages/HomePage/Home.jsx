import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import axios from "axios";
import { useGetManga } from "../../hooks/useGetManga";
import MangaCard from "../../components/MangaCard/MangaCard";
import SwiperMangaComponent from "../../components/SwiperMangaComponent/SwiperMangaComponent";
import MangaChapterAdded from "../../components/MangaChapterAdded/MangaChapterAdded";
import TopHomeList from "../../components/TopHomeList/TopHomeList";

function Home() {
  const { dataManga, isLoadingManga } = useGetManga();

  if (isLoadingManga) {
    return <h2>asdsad</h2>;
  }

  return (
    <>
      <BaseComponent>
        <div className={styles.container}>
          <div className={styles.baseComponent}>
            <SwiperMangaComponent dataManga={dataManga} />
          </div>
          <div className={styles.contentComponent}>
            <MangaChapterAdded />
            <TopHomeList />
          </div>
        </div>
      </BaseComponent>
    </>
  );
}

export default Home;

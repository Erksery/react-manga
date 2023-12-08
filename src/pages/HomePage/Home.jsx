import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import axios from "axios";
import { useGetManga } from "../../hooks/useGetManga";
import MangaCard from "../../components/MangaCard/MangaCard";
import SwiperMangaComponent from "../../components/SwiperMangaComponent/SwiperMangaComponent";
import MangaChapterAdded from "../../components/MangaChapterAdded/MangaChapterAdded";

function Home() {
  const { dataManga, isLoadingManga } = useGetManga();

  if (isLoadingManga) {
    return <h2>asdsad</h2>;
  }

  return (
    <>
      <BaseComponent>
        <div className={styles.baseComponent}>
          <SwiperMangaComponent dataManga={dataManga} />
        </div>
        <MangaChapterAdded />
      </BaseComponent>
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import axios from "axios";
import { useGetManga } from "../../hooks/useGetManga";
import MangaCard from "../../components/MangaCard/MangaCard";
import SwiperMangaComponent from "../../components/SwiperMangaComponent/SwiperMangaComponent";

function Home() {
  const { dataManga, isLoadingManga } = useGetManga();

  if (isLoadingManga) {
    return <h2>asdsad</h2>;
  }

  return (
    <>
      <BaseComponent>
        <SwiperMangaComponent dataManga={dataManga} />
      </BaseComponent>
      <BaseComponent>
        <SwiperMangaComponent dataManga={dataManga} />
      </BaseComponent>
      <BaseComponent>
        <SwiperMangaComponent dataManga={dataManga} />
      </BaseComponent>
      <BaseComponent>
        <SwiperMangaComponent dataManga={dataManga} />
      </BaseComponent>
      <BaseComponent>
        <SwiperMangaComponent dataManga={dataManga} />
      </BaseComponent>
    </>
  );
}

export default Home;

import React from "react";
import { useParams } from "react-router";
import { useGetActiveManga } from "../../hooks/useGetActiveManga";
import styles from "./MangaPage.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";

function MangaPage() {
  const { dataActiveManga, isLoadingActiveData } = useGetActiveManga();

  return (
    <>
      <BaseComponent>
        <div className={styles.mangaPage}>
          {dataActiveManga.idManga} | {dataActiveManga.titleManga}
        </div>
      </BaseComponent>
    </>
  );
}

export default MangaPage;

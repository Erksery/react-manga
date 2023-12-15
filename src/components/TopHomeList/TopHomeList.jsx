import React from "react";
import styles from "./TopHome.module.scss";
import TopManga from "../TopManga/TopManga";
import { useGetManga } from "../../hooks/useGetManga.js";

function TopHomeList() {
  const { dataManga, isLoadingManga } = useGetManga();
  console.log(dataManga);

  return (
    <div className={styles.topContainer}>
      <div className={styles.topHomeListContainer}>
        <span>Популярное</span>
        <div className={styles.topList}>
          {!isLoadingManga &&
            dataManga.map((manga) => (
              <TopManga key={manga.idManga} {...manga} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopHomeList;

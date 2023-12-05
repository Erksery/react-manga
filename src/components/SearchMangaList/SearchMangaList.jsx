import React, { useEffect, useState } from "react";
import styles from "./SearchMangaList.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchMangaList({ searchRequestValue, setActiveSearchModal }) {
  const [searchDataManga, setSearchDataManga] = useState([]);

  useEffect(() => {
    const getSearchManga = async () => {
      const resData = await axios.get("/api/searchManga", {
        params: { value: searchRequestValue },
      });

      setSearchDataManga(resData.data);
    };

    getSearchManga();
  }, [searchRequestValue]);

  if (searchDataManga.length === 0)
    return (
      <div className={styles.nullSearchData}>
        <p>По вашему запросу ничего не найдено</p>
      </div>
    );

  return (
    <div className={styles.searchMangaList}>
      {searchDataManga &&
        searchDataManga.map((manga) => (
          <Link
            to={`/manga/${manga.idManga}`}
            onClick={() => setActiveSearchModal(false)}
            key={manga.idManga}
            className={styles.searchMangaContainer}
          >
            <img src={`http://localhost:5001/image/${manga.coverImageManga}`} />
            <div className={styles.searchMangaName}>
              <span>{manga.titleManga}</span>
              <p>{manga.titleEnglish}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default SearchMangaList;

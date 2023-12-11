import axios from "axios";
import React, { useEffect, useState } from "react";
import MangaCard from "../../components/MangaCard/MangaCard";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import styles from "./Catalog.module.scss";
import { useParams } from "react-router";

function CatalogPage() {
  const [mangaCatalog, setMangaCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { tag } = useParams();

  useEffect(() => {
    async function getMangaCatalog() {
      const resData = await axios
        .get(`/api/catalog/${tag}`)
        .then((res) => setMangaCatalog(res.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
      return resData;
    }
    console.log(tag);
    getMangaCatalog();
  }, []);

  return (
    <BaseComponent>
      <div className={styles.catalogContainer}>
        <h2>Каталог #{tag && tag.length !== 0 ? tag : "All"}</h2>
        <div className={styles.catalogList}>
          {!isLoading &&
            mangaCatalog.map((manga) => (
              <MangaCard key={manga.idManga} {...manga} />
            ))}
        </div>
      </div>
    </BaseComponent>
  );
}

export default CatalogPage;

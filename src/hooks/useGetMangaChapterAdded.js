import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMangaChapterAdded = () => {
  const [mangaChapterAddedData, setMangaChapterAddedData] = useState([]);
  const [isLoadingMangaChapterAdded, setIsLoaingMangaChapterAdded] =
    useState(true);
  useEffect(() => {
    async function getData() {
      const resData = await axios
        .get("/api/mangaChapterAdded")
        .then((res) => setMangaChapterAddedData(res.data))
        .finally(() => setIsLoaingMangaChapterAdded(true));
      return resData;
    }
    getData();
  }, []);

  return { mangaChapterAddedData, isLoadingMangaChapterAdded };
};

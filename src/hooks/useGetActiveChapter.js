import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useGetActiveChapter = () => {
  const [activeChapterData, setActiveChapterData] = useState([]);
  const [isLoadingChapterData, setIsLoadingChapterData] = useState(true);
  const { idManga, idChapter } = useParams();

  useEffect(() => {
    async function getActiveChapter() {
      const resData = await axios
        .get(`/api/manga/${idManga}/chapters/${idChapter}`)
        .then((res) => setActiveChapterData(res.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoadingChapterData(false));
      return resData;
    }
    getActiveChapter();
  }, []);

  return { activeChapterData, isLoadingChapterData };
};

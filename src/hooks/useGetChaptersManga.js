import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useGetChaptersManga = () => {
  const [chaptersData, setChaptersData] = useState([]);
  const { id } = useParams();

  async function getChapters() {
    const resData = await axios
      .get(`/api/manga/${id}/chapters`)
      .then((res) => setChaptersData(res.data))
      .catch((err) => console.log(err));
    return resData;
  }

  useEffect(() => {
    getChapters();
  }, []);

  return { chaptersData };
};

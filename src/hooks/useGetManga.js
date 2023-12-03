import { useState, useEffect } from "react";
import axios from "axios";

export const useGetManga = () => {
  const [dataManga, setDataManga] = useState([]);
  const [isLoadingManga, setIsLoadingManga] = useState(true);

  async function getManga() {
    const resData = await axios
      .get("/api/manga")
      .then((res) => setDataManga(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingManga(false));

    return resData;
  }

  useEffect(() => {
    getManga();
  }, []);

  return { dataManga, isLoadingManga };
};

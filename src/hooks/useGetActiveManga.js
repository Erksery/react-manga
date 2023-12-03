import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const useGetActiveManga = () => {
  const [dataActiveManga, setDataActiveData] = useState([]);
  const [isLoadingActiveData, setIsLoadingActiveData] = useState(true);

  const { id } = useParams();
  async function getActiveManga() {
    const resData = await axios
      .get(`/api/manga/${id}`)
      .then((res) => setDataActiveData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingActiveData(false));
    return resData;
  }

  useEffect(() => {
    getActiveManga();
  }, []);

  return { dataActiveManga, isLoadingActiveData };
};

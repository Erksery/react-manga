import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router";

export const useGetUserData = () => {
  const [userData, setUserData] = useState({});
  const [bookMarks, setBookMarks] = useState([]);
  const [isLoadingUserData, setIsLoaingUserData] = useState(true);
  const { id } = useParams();
  const [cookies] = useCookies(["AuthData"]);
  const idUser = useState(cookies.AuthData.idUser);

  useEffect(() => {
    async function getUserData() {
      const resUserData = await axios
        .get(`/api/user/${id}`)
        .then((res) => setUserData(res.data))
        .catch((err) => console.log(err));
      const resBookMarksData = await axios
        .get(`/api/bookMarks`, {
          params: { idUser: idUser },
        })
        .then((res) => {
          console.log(222, res.data);
          setBookMarks(res.data);
        });
      return resUserData, resBookMarksData;
    }

    getUserData().finally(() => setIsLoaingUserData(false));
  }, [id]);

  return { userData, bookMarks, isLoadingUserData };
};

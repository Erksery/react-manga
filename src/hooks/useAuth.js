import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [cookies] = useCookies(["AuthData"]);

  useEffect(() => {
    setIsAuth(cookies.AuthData !== null || undefined ? true : false);
    console.log(isAuth);
  }, [cookies.AuthData]);

  return { isAuth };
};

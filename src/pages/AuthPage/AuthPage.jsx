import React, { useState } from "react";
import styles from "./AuthPage.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function AuthPage() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["AuthData"]);
  const getUserData = async (inputData) => {
    const resData = await axios.get("/api/authorization", {
      params: { email: inputData.email, password: inputData.password },
    });
    const stringAuthData = JSON.stringify(resData.data);
    setCookie("AuthData", stringAuthData, { path: "/" });
    console.log(cookie.AuthData);
  };

  const submitAuthForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const field = Object.fromEntries(formData);
    getUserData(field).then(() => navigate("/"));
  };

  return (
    <BaseComponent>
      <div className={styles.authPageContainer}>
        <h2>Авторизация</h2>
        <div className={styles.authForm}>
          <form onSubmit={submitAuthForm}>
            <div>
              <p>Email</p>
              <input name="email" type="text" placeholder="Введите эл. почту" />
            </div>
            <div>
              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="Введите пароль"
              />
            </div>
            <p>
              Впервые на сайте? <Link to={"/registration"}>Регистрация</Link>
            </p>

            <button>Подтвердить</button>
          </form>
        </div>
      </div>
    </BaseComponent>
  );
}

export default AuthPage;

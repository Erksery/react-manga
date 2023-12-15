import React, { useState } from "react";
import styles from "./RegistrationPage.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import { Link } from "react-router-dom";
import axios from "axios";

function RegistrationPage() {
  
  const postUserData = (data) => {
    axios.post("/api/registration", data).then((res) => console.log(res))
  }

  const submitRegistrationForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const field = Object.fromEntries(formData);
    console.log(field);

    postUserData(field)
  };

  return (
    <BaseComponent>
      <div className={styles.authPageContainer}>
        <h2>Регистрация</h2>
        <div className={styles.authForm}>
          <form onSubmit={submitRegistrationForm}>
            <p>
              🔔 Зарегистрировавшись вы соглашаетесь с
              <Link to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                {" "}
                политикой конфиденциальности
              </Link>
            </p>
            <div>
              <p>Name</p>
              <input name="name" type="text" placeholder="Введите логин" />
            </div>

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
              Уже есть аккаунт? <Link to={"/authorization"}>Авторизация</Link>
            </p>

            <button>Подтвердить</button>
          </form>
        </div>
      </div>
    </BaseComponent>
  );
}

export default RegistrationPage;

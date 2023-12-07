import React, { useRef, useState } from "react";
import styles from "./CreateMangaPage.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import CreateContainer from "../../components/CreateContainer/CreateContainer";
import { useQueryCreateManga } from "../../hooks/useQueryCreateManga";
import axios from "axios";
import { useNavigate } from "react-router";
import UploadImage from "../../components/UploadImage/UploadImage";

function CreateMangaPage() {
  const [coverUrl, setCoverUrl] = useState("");
  const navigate = useNavigate();

  const onSubmitAddManga = (event) => {
    const formData = new FormData(event.target);
    const field = Object.fromEntries(formData);
    console.log(field);
    axios
      .post("/api/createManga", field)
      .then(() => navigate("/"))
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <CreateContainer title={"Добавить тайтл"}>
      <form onSubmit={onSubmitAddManga} className={styles.createForm}>
        <div className={styles.createContainer}>
            <UploadImage imageUrl={coverUrl} setImageUrl={setCoverUrl}/>
          <input type="hidden" name="avatarUrl" value={coverUrl} />
          <div className={styles.inputGroup}>
            <div className={styles.namesContainer}>
              <div className={styles.inputContainer}>
                <p>Название</p>
                <input name="title" placeholder="Введите название" required />
              </div>
              <div className={styles.inputContainer}>
                <p>Английское название</p>
                <input
                  name="titleEn"
                  placeholder="Введите английское название"
                  required
                />
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.inputContainer}>
                <p>Тип</p>
                <input
                  name="type"
                  placeholder="Манга / Манхва / Маньхуа"
                  required
                />
              </div>

              <div className={styles.inputContainer}>
                <p>Статус</p>
                <input
                  name="status"
                  placeholder="Анонс / Онгоинг / Завершен"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <p>Статус перевода</p>
                <input
                  name="translate"
                  placeholder="Продолжается / Заброшен / Завершен"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.subInfoContainer}>
          <div className={styles.inputContainer}>
            <p>Формат выпуска</p>
            <input name="format" placeholder="Веб / Вебтун " required />
          </div>
          <div className={styles.inputContainer}>
            <p>Год релиза</p>
            <input name="year" placeholder="2000" required />
          </div>
        </div>
        <div className={styles.subInfoContainer}>
          <div className={styles.inputContainer}>
            <p>Автор</p>
            <input name="author" placeholder="Кто же он?" required />
          </div>
          <div className={styles.inputContainer}>
            <p>Художник</p>
            <input name="painter" placeholder="А это ещё кто?" required />
          </div>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.inputContainer}>
            <p>Описание</p>
            <textarea name="summary" placeholder="Давным давно..." required />
          </div>
        </div>
        <div className={styles.subInfoContainer}>
          <div className={styles.inputContainer}>
            <p>Жанры</p>
            <input
              name="genres"
              placeholder="Приключения / Романтика / Комедия"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <p>Теги</p>
            <input
              name="tags"
              placeholder="ГГ мужчина / ГГ женщина / Антигерой"
              required
            />
          </div>
        </div>
        <div className={styles.formButtonContainer}>
          <button type="submit">Загрузить</button>
        </div>
      </form>
    </CreateContainer>
  );
}

export default CreateMangaPage;

import React, { useEffect, useState } from "react";
import styles from "./CreateChapterPage.module.scss";
import CreateContainer from "../../components/CreateContainer/CreateContainer";
import { useParams } from "react-router";
import { useGetManga } from "../../hooks/useGetManga";
import UploadImage from "../../components/UploadImage/UploadImage";
import axios from "axios";
import ScrollContainer from "react-indiana-drag-scroll";

function CreateChapterPage() {
  const [arrayImageChapter, setArrayImageChapter] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();

  const onSubmitAddArrayImage = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const field = Object.fromEntries(formData);
    const stringArray = JSON.stringify(arrayImageChapter);
    const obj = { array: stringArray, numberChapter: field.number };

    axios.post(`/api/manga/${id}/createChapters`, obj);
  };

  return (
    <CreateContainer title={"Добавить главу"}>
      <form onSubmit={onSubmitAddArrayImage}>
        <div className={styles.createChapterContainer}>
          <div className={styles.imagesContainer}>
            <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <ScrollContainer className={styles.scrollContainer}>
              {arrayImageChapter.map((image) => (
                <img key={image} src={`http://localhost:5001/image/${image}`} />
              ))}
            </ScrollContainer>
          </div>

          <div className={styles.groupInput}>
            <div className={styles.inputContainer}>
              <p>Номер главы</p>
              <input
                type="text"
                name="number"
                placeholder="Введите номер"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <p>Название главы</p>
              <input
                type="text"
                name="title"
                placeholder="Введите название"
                required
              />
            </div>
          </div>
          <div>
            <button
            className={styles.addImageButton}
              type="button"
              onClick={() =>
                setArrayImageChapter([...arrayImageChapter, imageUrl])
              }
            >
              Добавить
            </button>
          </div>
        </div>
        <div className={styles.formButtonContainer}>
          <button type="submit">Загрузить</button>
        </div>
      </form>
    </CreateContainer>
  );
}

export default CreateChapterPage;

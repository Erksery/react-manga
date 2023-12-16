import React, { useRef } from "react";
import styles from "./UploadImage.module.scss";
import { useQueryCreateManga } from "../../hooks/useQueryCreateManga";

function UploadImage({ imageUrl, setImageUrl }) {
  const { mutate } = useQueryCreateManga();
  const fileInputRef = useRef(null);

  const clearFileName = (file) => {
    const filename = file.name;
    const newFileName = filename.replace(/\.(jpg|png|jpeg)$/i, "");

    setImageUrl(newFileName);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    mutate(file);
    clearFileName(file);
  };

  return (
    <>
      <div
        onClick={() => fileInputRef.current.click()}
        className={styles.addImage}
      >
        {!imageUrl ? (
          <label>Нажмите, чтобы загрузить картинку</label>
        ) : (
          <img src={`http://localhost:5001/image/${imageUrl}`} />
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name="fileData"
        onChange={handleCoverImageChange}
      />
    </>
  );
}

export default UploadImage;

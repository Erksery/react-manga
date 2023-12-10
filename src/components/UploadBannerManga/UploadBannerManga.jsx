import React, { useRef } from "react";
import styles from "./UploadBannerManga.module.scss";
import { useQueryCreateManga } from "../../hooks/useQueryCreateManga";

function UploadBannerManga({ bannerImageUrl, setBannerImageUrl }) {
  const { mutate } = useQueryCreateManga();
  const fileInputRef = useRef(null);

  const clearFileName = (file) => {
    const filename = file.name;
    const newFileName = filename.replace(/\.(jpg|png|jpeg)$/i, "");
    setTimeout(() => {
      setBannerImageUrl(newFileName);
    }, 1000);
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
        {!bannerImageUrl ? (
          <label>Нажмите, чтобы загрузить баннер</label>
        ) : (
          <img src={`http://localhost:5001/image/${bannerImageUrl}`} />
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name="bannerImageData"
        onChange={handleCoverImageChange}
      />
    </>
  );
}

export default UploadBannerManga;

import React from "react";
import styles from "./UserPage.module.scss";
import { useGetUserData } from "../../hooks/useGetUserData";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import MangaCard from "../../components/MangaCard/MangaCard";
function UserPage() {
  const { userData, bookMarks } = useGetUserData();
  return (
    <BaseComponent>
      <div className={styles.userPage}>
        <div
          style={{
            backgroundImage:
              "url(http://localhost:5001/image/a15544ce2ff567d3a3a0ae3dc479d73577b08ac4_46368266003702174)",
          }}
          className={styles.userBanner}
        />
        <div className={styles.userInfoContainer}>
          <div className={styles.groupInfo}>
            <div className={styles.logoContainer}>
              <div className={styles.userImage}>
                <img src="http://localhost:5001/image/MqLYFST4k4mY_250x350" />
              </div>
            </div>
            <div className={styles.userNameContainer}>
              <h3>{userData.loginUser}</h3>
            </div>
          </div>
        </div>
        <div className={styles.bookMarksList}>
          {bookMarks.map((manga) => (
            <MangaCard key={manga.idBookMarks} {...manga} />
          ))}
        </div>
      </div>
    </BaseComponent>
  );
}

export default UserPage;

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
        <h2>{userData.loginUser}</h2>
        {bookMarks.map((manga) => (
          <MangaCard key={manga.idBookMarks} {...manga} />
        ))}
      </div>
    </BaseComponent>
  );
}

export default UserPage;

import React, { useState } from "react";
import {
  Icon28SunOutline,
  Icon28MoonOutline,
  Icon32SearchOutline,
  Icon36ServicesOutline,
} from "@vkontakte/icons";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import SearchHeaderModal from "../SearchHeaderModal/SearchHeaderModal";

function Header({ handleToggleTheme, theme }) {
  const [activeSearchModal, setActiveSearchModal] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Link to={"/"}>
            <h2>ReactManga</h2>
          </Link>

          <button
            onClick={() => setActiveSearchModal(true)}
            className={styles.searchButton}
          >
            <Icon32SearchOutline width={25} />
            Поиск
          </button>
          <SearchHeaderModal
            activeSearchModal={activeSearchModal}
            setActiveSearchModal={setActiveSearchModal}
          />
        </div>

        <div className={styles.userOptionsContainer}>
          <button className={styles.headerButton}>
            <Icon36ServicesOutline width={25} />
            Каталог
          </button>
          <button onClick={handleToggleTheme} className={styles.themeButton}>
            {theme === "light" ? (
              <Icon28MoonOutline width={25} />
            ) : (
              <Icon28SunOutline width={25} />
            )}
          </button>

          <button className={styles.authButton}>Войти</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
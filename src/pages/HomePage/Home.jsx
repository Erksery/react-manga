import React from "react";
import styles from "./Home.module.scss";
import BaseComponent from "../../components/BaseComponent/BaseComponent";

function Home({ handleToggleTheme }) {
  return (
    <BaseComponent>
      <div>
        <button className={styles.testStyle} onClick={handleToggleTheme}>
          click
        </button>
      </div>
    </BaseComponent>
  );
}

export default Home;

import React from "react";
import styles from "./BaseComponent.module.scss";

function BaseComponent({ children }) {
  return (
    <div className={styles.component}>
      <div className={styles.baseComponent}>{children}</div>
    </div>
  );
}

export default BaseComponent;

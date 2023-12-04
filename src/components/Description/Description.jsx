import React from "react";
import styles from "./Description.module.scss";

function Description({ str }) {
  return (
    <div className={styles.descriptionContainer}>
      <p>{str}</p>
    </div>
  );
}

export default Description;

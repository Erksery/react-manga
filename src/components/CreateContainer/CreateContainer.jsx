import React from "react";
import BaseComponent from "../BaseComponent/BaseComponent";
import styles from "./CreateContainer.module.scss";

function CreateContainer({ title, children }) {
  return (
    <BaseComponent>
      <div className={styles.createContainer}>
        <h2>{title}</h2>
        {children}
      </div>
    </BaseComponent>
  );
}

export default CreateContainer;

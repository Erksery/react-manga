import React, { useEffect, useState } from "react";
import styles from "./TabsMangaPage.module.scss";
import Description from "../Description/Description";
import ChaptersMangaPage from "../ChaptersMangaPage/ChaptersMangaPage";

function TabsMangaPage({ str }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "О тайтле", component: <Description str={str} /> },
    {
      title: "Главы",
      component: <ChaptersMangaPage />,
    },
    {
      title: "Комментарии",
      component: <Description str={"gfgfdgdfggd"} />,
    },
  ];

  return (
    <>
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{ color: activeTab === index && "#4099ff" }}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].component}</div>
    </>
  );
}

export default TabsMangaPage;

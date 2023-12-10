import React, { useEffect, useState } from "react";
import styles from "./TabsMangaPage.module.scss";
import Description from "../Description/Description";
import ChaptersMangaPage from "../ChaptersMangaPage/ChaptersMangaPage";
import { Link } from "react-router-dom";
import { Icon28WriteOutline } from "@vkontakte/icons";

function TabsMangaPage({ str, id, genres, tags }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "О тайтле",
      component: <Description str={str} genres={genres} tags={tags} />,
    },
    {
      title: "Главы",
      component: <ChaptersMangaPage id={id} />,
    },
    {
      title: "Комментарии",
      component: <Description str={"gfgfdgdfggd"} />,
    },
  ];

  return (
    <>
      <div className={styles.tabsContainer}>
        <div>
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
        <Link to={`/manga/${id}/createChapter`}>
          <Icon28WriteOutline width={20} />
        </Link>
      </div>
      <div>{tabs[activeTab].component}</div>
    </>
  );
}

export default TabsMangaPage;

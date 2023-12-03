import React from "react";
import styles from "./MangaCard.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MangaData {
  idManga: number;
  titleManga: string;
  coverImageManga: string;
}

function MangaCard({ idManga, titleManga, coverImageManga }: MangaData) {
  return (
    <Link to={`/manga/${idManga}`}>
      <motion.img
        whileHover={{ scale: 1.1, y: -5 }}
        className={styles.imageManga}
        src={`http://localhost:5001/image/${coverImageManga}`}
      />
      <p className={styles.titleManga}>{titleManga}</p>
      <p className={styles.formatManga}>Maнхва</p>
    </Link>
  );
}

export default MangaCard;

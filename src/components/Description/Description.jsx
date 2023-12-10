import React, { useEffect, useState } from "react";
import styles from "./Description.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Description({ str, genres, tags }) {
  const [descriptionClampLength, setDescriptionClampLength] = useState(4);
  const [genresList, setGenresList] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    if (genres !== undefined && tags !== undefined) {
      setGenresList(genres.split(","));
      setTagsList(tags.split(","));
    }
  }, [genres, tags]);

  return (
    <div className={styles.descriptionContainer}>
      <p
        onClick={() =>
          setDescriptionClampLength(descriptionClampLength === 4 ? 10 : 4)
        }
        style={{ WebkitLineClamp: descriptionClampLength }}
      >
        {str}
      </p>
      <div className={styles.genresTagsContainer}>
        {genresList.map((genre, index) => (
          <Link key={index}>
            <motion.div whileHover={{ y: -5 }}>{genre}</motion.div>
          </Link>
        ))}
        {tagsList.map((tag, index) => (
          <Link key={index}>
            <motion.div whileHover={{ y: -5 }}>{tag}</motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Description;

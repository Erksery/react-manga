import React, { useState } from "react";
import styles from "./FavoriteModal.module.scss";
import "./Favorite.scss";
import Modal from "../Modal/Modal";
import { Transition } from "react-transition-group";
import { Icon36Favorite } from "@vkontakte/icons";
import axios from "axios";

function FavoriteModal({
  activeFavoriteModal,
  setActiveFavoriteModal,
  idUser,
  idManga,
}) {
  const [rateCount, setRateCount] = useState(0);

  const handleAddRatingManga = () => {
    axios.post("/api/addUserMangaRate", {
      idUser: idUser,
      ratingCount: rateCount,
      idManga: idManga,
    });
  };

  return (
    <Modal
      activeSearchModal={activeFavoriteModal}
      setActiveSearchModal={setActiveFavoriteModal}
    >
      <Transition in={activeFavoriteModal} timeout={500}>
        {(activeFavoriteModal) => (
          <div
            onClick={(event) => event.stopPropagation()}
            className={`favoriteModalContainer ${activeFavoriteModal}`}
          >
            <span className={styles.favoriteModalTitle}>Поставьте оценку</span>
            <div className={styles.favoriteStarsContainer}>
              {new Array(10).fill(1).map((_, index) => (
                <div key={index} onClick={() => setRateCount(index + 1)}>
                  <Icon36Favorite
                    style={
                      rateCount <= index
                        ? { color: "#6d6d6d56" }
                        : { color: "#0068df" }
                    }
                    width={28}
                  />
                </div>
              ))}
            </div>

            <div className={styles.rateButtonContainer}>
              <p className={styles.rateTitle}>
                Вы поставили:
                <span>
                  <Icon36Favorite style={{ color: "#0068df" }} width={15} />
                  {rateCount}
                </span>
              </p>
              <button
                onClick={() => {
                  handleAddRatingManga();
                  setActiveFavoriteModal(false);
                }}
                disabled={rateCount <= 0}
              >
                Подтердить
              </button>
            </div>
          </div>
        )}
      </Transition>
    </Modal>
  );
}

export default FavoriteModal;

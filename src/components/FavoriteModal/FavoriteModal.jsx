import React, { useState } from "react";
import styles from "./FavoriteModal.module.scss";
import "./Favorite.scss";
import Modal from "../Modal/Modal";
import { Transition } from "react-transition-group";
import { Icon36Favorite } from "@vkontakte/icons";

function FavoriteModal({ activeFavoriteModal, setActiveFavoriteModal }) {
  const [rateCount, setRateCount] = useState(0);
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
                        ? { color: "lightgray" }
                        : { color: "#0068df" }
                    }
                    width={28}
                  />
                </div>
              ))}
            </div>
            <p className={styles.rateTitle}>Вы поставвили: {rateCount}</p>
            <div className={styles.rateButtonContainer}>
              <button>Подтердить</button>
            </div>
          </div>
        )}
      </Transition>
    </Modal>
  );
}

export default FavoriteModal;

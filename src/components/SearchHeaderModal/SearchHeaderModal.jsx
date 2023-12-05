import React, { useEffect, useState } from "react";
import styles from "./SearchHeaderModal.module.scss";
import "./SearchHeaderModalTransition.scss";
import { Transition } from "react-transition-group";
import Modal from "../Modal/Modal";
import { Icon36Cancel } from "@vkontakte/icons";
import { useGetManga } from "../../hooks/useGetManga";
import { Link } from "react-router-dom";
import SearchMangaList from "../SearchMangaList/SearchMangaList";

function SearchHeaderModal({ activeSearchModal, setActiveSearchModal }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchRequestValue, setSearchRequestValue] = useState("");
  const { dataManga, isLoadingManga } = useGetManga();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchRequestValue(searchValue);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  return (
    <Modal
      activeSearchModal={activeSearchModal}
      setActiveSearchModal={setActiveSearchModal}
    >
      <Transition in={activeSearchModal} timeout={500}>
        {(activeSearchModal) => (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`searchModal ${activeSearchModal}`}
          >
            <div className={styles.searchInputContainer}>
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Опять работать?"
              />
              <button onClick={() => setSearchValue("")}>
                <Icon36Cancel width={25}></Icon36Cancel>
              </button>
            </div>
            <SearchMangaList
              searchRequestValue={searchRequestValue}
              dataManga={dataManga}
              setActiveSearchModal={setActiveSearchModal}
            />
          </div>
        )}
      </Transition>
    </Modal>
  );
}

export default SearchHeaderModal;

import React from "react";
import { Transition } from "react-transition-group";
import "./Modal.scss";

function Modal({ activeSearchModal, setActiveSearchModal, children }) {
  return (
    <Transition in={activeSearchModal} timeout={500}>
      {(activeSearchModal) => (
        <div
          onClick={() => setActiveSearchModal((prev) => !prev)}
          className={`modalBackground ${activeSearchModal}`}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export default Modal;

import React from "react";
import reactDom from "react-dom";
import { Session } from "./Session";

const Modal = ({ onOpen, setOnOpen, logView, setLogView }) => {
  const onClose = () => {
    setOnOpen(false);
  };

  return reactDom.createPortal(
    <>
      {onOpen && (
        <div className="modal-container" onMouseDown={onClose}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="button-primary btn-second">
              X
            </button>
            <Session
              onOpen={onOpen}
              setOnOpen={setOnOpen}
              logView={logView}
              setLogView={setLogView}
            />
          </div>
        </div>
      )}
    </>,

    document.getElementById("root")
  );
};

export default Modal;

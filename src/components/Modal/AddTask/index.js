import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

import { AddTaskWrapper } from "./style";

export default function AddTask({ isShowing, toggle }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggle();
    }
  };

  return isShowing
    ? ReactDOM.createPortal(
        <AddTaskWrapper>
          <div className="modal-overlay">
            <div className="modal-wrapper" onClick={closeModal} ref={modalRef}>
              <div className="modal">
                <h2>Add New Task</h2>
                <Form />
              </div>
            </div>
          </div>
        </AddTaskWrapper>,
        document.body
      )
    : null;
}

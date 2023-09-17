import React from "react";
import Modal from "react-modal";
import styles from "./ConfirmationModal.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "300px",
    padding: "0",
  },
  overlay: {
    background: "rgb(197 191 191 / 75%)",
  },
};

Modal.setAppElement("#root");

const ConfirmationModal = ({
  title = "modal",
  question,
  func,
  isIcon = false,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    console.log("afterOpenModal");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const confirm = () => {
    func();
  };

  return (
    <div className={styles.container}>
      {isIcon ? (
        <img src={title} alt="icon" onClick={openModal}/>
      ) : (
        <span onClick={openModal}>{title}</span>
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex border-b-2 justify-between">
          <h1 className="p-2">Confirm the action</h1>
          <span
            className="cursor-pointer px-2 py-1 text-gray-500"
            onClick={closeModal}
          >
            x
          </span>
        </div>

        <div className="p-4">
          <h3 className="py-3">{question}</h3>
          <div className={styles.buttons}>
            <button onClick={confirm}>yes</button>
            <button onClick={closeModal}>no</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;

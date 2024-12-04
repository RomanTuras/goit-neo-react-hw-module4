import Modal from "react-modal";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import css from "./ImageModal.module.css";

const ImageModal = ({ closeModal, image }) => {
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={modalStyle}
      contentLabel="Image"
    >
      <img
        className={css.bigImage}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <p className={css.info}>
      <span className={css.author}><FaRegUser size={25} />{image.user.name}</span>
      <span className={css.likes}><AiOutlineLike size={25} />{image.likes}</span>
      </p>
    </Modal>
  );
};

export default ImageModal;

import css from "./ImageCard.module.css";

const ImageCard = ({ image, showBigImage }) => {
  const handleClick = () => {
    showBigImage(image);
  };
  return (
    <div className={css.galleryItem}>
      <img
        className={css.galleryImage}
        src={image.urls.thumb}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;

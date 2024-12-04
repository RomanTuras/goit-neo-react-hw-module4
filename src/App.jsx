import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import getImages from "./api/images.js";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [bigImage, setBigImage] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const searchByQuery = async (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setIsModal(false);
  };

  const getNextPage = async () => {
    setPage(page + 1);
  };

  const showBigImage = (image) => {
    console.log(image);
    setBigImage(image);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setIsModal(false);
      try {
        setIsLoading(true);
        setError(false);
        const {data} = await getImages(query, page);
        if (page === 1) {
          setImages(data.results);
          setTotalImages(data.total);
        } else {
          setImages((oldData) => {
            return [...oldData, ...data.results];
          });
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) fetchImages();
  }, [page, query]);

  return (
    <>
      <SearchBar searchByQuery={searchByQuery} />
      <Container>
        <ImageGallery images={images} showBigImage={showBigImage} />

        <Loader isVisible={isLoading} />

        {images.length < totalImages && !error && !isLoading && (
          <LoadMoreBtn getNextPage={getNextPage} />
        )}

        {error && !isLoading && <ErrorMessage />}
      </Container>

      {isModal && (
        <ImageModal image={bigImage} closeModal={closeModal} />
      )}
    </>
  );
}

export default App;

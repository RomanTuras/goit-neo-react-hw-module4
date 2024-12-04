import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ getNextPage }) => {
  const loadMore = () => {
    getNextPage();
  };

  return (
    <button className={css.loadMoreBtn} onClick={loadMore}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;

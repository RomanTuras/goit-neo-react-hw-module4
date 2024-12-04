import toast, { Toaster } from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = ({ searchByQuery }) => {
  const notify = () =>
    toast.error("Searching query is to short", {
      duration: 3000,
      position: "top-right",
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { _, search } = form.elements;
    const query = search.value.trim().toLowerCase();
    if (query.length < 2) {
      notify();
    } else {
      searchByQuery(query);
    }
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm} >
        <input
          className={css.searchInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchBtn} >
          <IoMdSearch size={25} />
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;

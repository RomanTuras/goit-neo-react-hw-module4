import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css"

const Loader = ({ isVisible }) => {
  return (
    <Circles
      height="40"
      width="40"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={isVisible}
    />
  );
};

export default Loader;

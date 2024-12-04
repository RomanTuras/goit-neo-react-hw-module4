import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.errorMessage}>
      Oops.. Something went wrong, please reload
    </p>
  );
};

export default ErrorMessage;
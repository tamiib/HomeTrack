import closeIcon from "@assets/icons/close-icon.svg";
import clsx from "clsx";
import styles from "./CloseIcon.module.scss";

const CloseIcon = ({ onClick, show }) => {

  const iconStyle = clsx({
    [styles.icon]: true,
    [styles.show]: show,
  });

  const onIconClick = (e) => {
    onClick(e);
  }

  return (
    <img
      src={closeIcon.src}
      width="32px"
      height="32px"
      className={iconStyle}
      onClick={onIconClick}
    />
  );
};

export default CloseIcon;

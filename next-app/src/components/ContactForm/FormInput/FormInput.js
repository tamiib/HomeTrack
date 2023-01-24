import closeIcon from "@assets/icons/close-icon.svg";
import styles from "./FormInput.module.scss";

const FormInput = ({ registerProps, type, placeholder, label }) => {
  const formattedLabel = label.trim().toLowerCase();

  return (
    <div className={styles.container}>
      <label htmlFor={formattedLabel} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          id={formattedLabel}
          {...registerProps}
        />
        <img src={closeIcon.src} width="24px" height="24px" className={styles.icon} />
      </div>
    </div>
  );
};

export default FormInput;

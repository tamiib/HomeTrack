import styles from "./FormInput.module.scss";

const FormInput = ({ registerProps, type, placeholder, label }) => {
  const formattedLabel = label.trim().toLowerCase();

  return (
    <div className={styles.container}>
      <label htmlFor={formattedLabel} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={formattedLabel}
        {...registerProps}
      />
    </div>
  );
};

export default FormInput;

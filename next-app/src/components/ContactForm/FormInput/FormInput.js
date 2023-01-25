import CloseIcon from "@/components/CloseIcon/CloseIcon";
import clsx from "clsx";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useMedia } from "use-media";
import styles from "./FormInput.module.scss";

const FormInput = ({
  type,
  placeholder,
  label,
  name,
  control,
  setValue,
  setFocus,
  formSubmitted,
  error,
  validations,
}) => {
  const [inputFocused, setInputFocused] = useState(false);
  const desktopView = useMedia({minWidth: 768});
  const handleIconClick = () => {
    setValue(name, "", { shouldValidate: formSubmitted, shouldDirty: formSubmitted });
    setFocus(name);
  }; 

  const onFocusInput = () => {
    setInputFocused(true);
  }

  const onBlurInput = () => {
    setInputFocused(false);
  }

  const input = (
    <Controller
      name={name}
      control={control}
      rules={{ ...validations }}
      render={({ field: { onChange, onBlur, value, name, ref } }) =>
        type === "textarea" ? (
          <textarea
            id={name}
            placeholder={placeholder}
            value={value}
            ref={ref}
            rows={desktopView ? "3" : "6"}
            style= {{resize: "none"}}
            onBlur={onBlur}
            onChange={onChange}
          />
        ) : (
          <input
            id={name}
            value={value}
            placeholder={placeholder}
            type={type}
            ref={ref}
            onBlur={(e) => {
              onBlur(e);
              onBlurInput();
            }}
            onChange={onChange}
            onFocus={onFocusInput}
          />
        )
      }
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <div className={clsx({ [styles.error]: true, [styles.show]: !!error })}>
          {error?.message}
        </div>
      </div>
      <div className={styles.inputContainer}>
        {input}
        {type !== "textArea" && (
          <CloseIcon onClick={handleIconClick} show={inputFocused} />
        )}
      </div>
    </div>
  );
};

export default FormInput;

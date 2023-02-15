import { Controller } from "react-hook-form";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ name, label, control }) => {
  return (
    <div className={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <input id={name} type="checkbox" onChange={onChange} />
        )}
      />
      <label>{label}</label>
    </div>
  );
};

export default CheckBox;

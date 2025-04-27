import styles from "./styles/Inputbox.module.css";

export default function Inputbox({ placeholder, type, icon: Icon, labeltext, handleChange }) {
  return (
    <div className={styles.inputbox}>
      <label>{labeltext}</label>
      <div className={styles.input}>
        <Icon />
        <input 
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          name={labeltext}
        />
      </div>
    </div>
  );
}

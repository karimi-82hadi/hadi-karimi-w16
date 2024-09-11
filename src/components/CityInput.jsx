import styles from "./CityInput.module.css";

const CityInput = ({ handleChange, hint }) => {
  return (
    <div className={styles.input}>
      <h1>Input Mask Mini Project</h1>
      <div className={styles.inputInner}>
        <label htmlFor="input">{hint}Hadi Karimi</label>
        <input type="text" id="input" onChange={handleChange} value="Hadi" />
      </div>
    </div>
  );
};

export default CityInput;

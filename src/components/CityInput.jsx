import { useState } from "react";

import cities from "../cities.json";

import styles from "./CityInput.module.css";

const CityInput = () => {
  const allCities = cities;
  const [searchedCities, setSearchedCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const cityFullName = cityName.length ? searchedCities[0] : "";

  const searchHandler = (e) => {
    const filteredCities = allCities.filter((item) =>
      item.startsWith(e.target.value)
    );
    setSearchedCities(filteredCities);
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      setCityName(cityFullName);
    }
  };

  return (
    <div className={styles.input}>
      <h1>Input Mask Mini Project</h1>
      <div className={styles.inputInner}>
        <label htmlFor="input">{cityFullName}</label>
        <input
          type="text"
          id="input"
          placeholder="Enter City Name"
          onChange={(e) => setCityName(e.target.value)}
          onInput={searchHandler}
          onKeyPress={keyPressHandler}
          value={cityName}
        />
      </div>
    </div>
  );
};

export default CityInput;

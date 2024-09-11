import { useState } from "react";

import cities from "../cities.json";

import styles from "./CityInput.module.css";
import SearchResult from "./SearchResult";

const CityInput = () => {
  const allCities = cities;
  const [searchedCities, setSearchedCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [cityFullName, setCityFullName] = useState("");

  const searchHandler = (text) => {
    const filteredCities = allCities.filter((item) => item.startsWith(text));
    setSearchedCities(filteredCities);
    setCityFullName(text && filteredCities[0]);
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      setCityName(cityFullName);
      searchHandler(cityFullName);
    }
  };

  const searchItemClickHandler = (e) => {
    setCityName(e.target.textContent);
    setCityFullName(e.target.textContent);
    searchHandler(e.target.textContent);
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
          onInput={(e) => searchHandler(e.target.value)}
          onKeyPress={keyPressHandler}
          value={cityName}
        />
        {!!cityName.length && (
          <SearchResult
            data={searchedCities}
            searchItemClickHandler={searchItemClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default CityInput;

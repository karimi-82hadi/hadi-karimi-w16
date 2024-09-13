import { useState } from "react";

import cities from "../constants/cities.json";

import styles from "./CityInput.module.css";
import SearchResult from "./SearchResult";

const CityInput = () => {
  const allCities = cities;
  const [searchedCities, setSearchedCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [cityFullName, setCityFullName] = useState("");

  const searchHandler = (searchTerm) => {
    const filteredCities = allCities.filter((item) =>
      item.startsWith(searchTerm)
    );
    setSearchedCities(filteredCities);
    setCityFullName(searchTerm && filteredCities[0]);
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      setCityName(cityFullName);
      searchHandler(cityFullName);
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
          onInput={(e) => searchHandler(e.target.value)}
          onKeyPress={keyPressHandler}
          value={cityName}
        />
        {!!cityName.length && cityName !== cityFullName && (
          <SearchResult
            data={searchedCities}
            setCityName={setCityName}
            cityFullName={cityFullName}
            setCityFullName={setCityFullName}
            searchHandler={searchHandler}
          />
        )}
      </div>
    </div>
  );
};

export default CityInput;

import styles from "./SearchResult.module.css";

function SearchResult({
  data,
  setCityName,
  cityFullName,
  setCityFullName,
  searchHandler,
}) {
  const clickHandler = (e) => {
    setCityName(e.target.textContent);
    setCityFullName(e.target.textContent);
    searchHandler(e.target.textContent);
  };

  const mouseOverHandler = (e) => {
    setCityFullName(e.target.textContent);
  };

  return (
    <div className={styles.searchResult}>
      <ul>
        {data.length ? (
          data.map((item, index) => (
            <li
              key={index}
              onClick={clickHandler}
              onMouseOver={mouseOverHandler}
              className={cityFullName === item ? styles.active : undefined}
            >
              {item}
            </li>
          ))
        ) : (
          <li className={styles.noResult}>No Results Found!</li>
        )}
      </ul>
    </div>
  );
}

export default SearchResult;

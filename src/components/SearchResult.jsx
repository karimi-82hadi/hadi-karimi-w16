import styles from "./SearchResult.module.css";

function SearchResult({ data, searchItemClickHandler }) {
  return (
    <div className={styles.searchResult}>
      <ul>
        {data.length ? (
          data.map((item, index) => (
            <li key={index} onClick={searchItemClickHandler}>
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

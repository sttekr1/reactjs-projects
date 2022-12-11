import { useEffect, useState } from "react";
import "./SearchInput.css";

const SearchInput = props => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      props.updateSearchValue(inputValue);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={inputValue}
        placeholder="Search for countries..."
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

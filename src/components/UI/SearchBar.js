import style from "./SearchBar.module.css";
import { useRef, useState } from "react";

export default function SearchBar(props) {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");

  const inputRef = useRef(null); 
  const [inputIsFocused, setInputIsFocused] = useState(false);

  function handleFocus(){
    setInputIsFocused(true);
  }

  function handleBlur(){
    setInputIsFocused(false);
  }

  function handleEnterPress(event){
    if(event.key === "Enter"){
      handleSearch();
    }
  }

  function handleChange(event) {
    setEnteredSearchValue(event.target.value);
  }

  function handleSearch() {
    if (enteredSearchValue.trim().length === 0) return;
    props.onSearch(enteredSearchValue);
  }

  function handleClear() {
    setEnteredSearchValue("");
    inputRef.current.focus();
    props.onClear();
  }

  return (
    <div className={`${style.wrapper} ${inputIsFocused && style["input-focused"]}`}>
      <input
        className={style.input}
        type="text"
        onChange={handleChange}
        value={enteredSearchValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleEnterPress}
        ref={inputRef}
        placeholder={props.placeholder}
      />
      {enteredSearchValue && (
        <button className={style.button} type="button" onClick={handleClear}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
      <button className={style.button} type="button" onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

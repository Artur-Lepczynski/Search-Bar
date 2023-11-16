import { useState } from "react";
import "./App.css";
import SearchBar from "./components/UI/SearchBar";

export default function App() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(searchValue) {
    console.log(searchValue);
    setSearchValue(searchValue);
  }

  function handleClear() {
    console.log("Cleared!");
    setSearchValue("");
  }

  return (
    <div className="app">
      <SearchBar
        onSearch={handleSearch}
        onClear={handleClear}
        placeholder="Search"
      />
      <p>
        {searchValue
          ? `You're searching for ${searchValue}`
          : "You're not searching for anything"}
      </p>
    </div>
  );
}

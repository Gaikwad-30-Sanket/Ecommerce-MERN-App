import React from "react";
import { useSearch } from "../../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css"
const SearchInput = () => {
  const [values, setValues] = useSearch(); //this is globally made input state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data }); // keeping the values as it is and adding the data into results which is defined inside the global state
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="d-flex search-form my-input-class"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2 my-input-text"
          type="search"
          placeholder="Search for products brand and more"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })} //keyword is defined inside the context API
        />
        <button className="btn  my-search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

import React from "react";
import "./categoryForm.css"

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="ctg-container">
        <div className=" my-ctg">
          <input
            type="text"
            className="lf-input"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="cflf-btns">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;

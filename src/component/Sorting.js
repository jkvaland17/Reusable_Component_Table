import React from "react";

const Sorting = ({ handleSort, reset }) => {
  return (
    <>
    <div className="table_functionality">
      <div className="firstname">
        <input type="radio" name="sort" onClick={() => handleSort("name")} />
        <label>Sort by First Name</label>
      </div>
      <div className="lastname">
        <input type="radio" name="sort" onClick={() => handleSort("city")} />
        <label>Sort by City</label>
      </div>
      <div className="reset_btn">
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </div>
      </div>
    </>
  );
};

export default Sorting;

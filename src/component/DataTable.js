import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";
import Data from "../component/Data.json";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setshowPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [filterValue, setFilterValue] = useState([]);
  const [pagination, setpagination] = useState({
    start: 0,
    end: showPerPage,
    show: 10,
  });
  useEffect(() => {
    function fetchMyAPI() {
      let data = Data;
      setData(data);
    }
    fetchMyAPI();
  }, []);

  useEffect(() => {
    setFilterValue(
      data.slice(page * showPerPage, showPerPage + page * showPerPage)
    );
  }, [showPerPage, pagination, page, data]);

  const changeoptionpage = (e) => {
    setshowPerPage(Number(e.target.value));
  };

  //pagination start
  const onPagination = (start, end) => {
    setpagination({ start: start, end: end });
  };
  //pagination end

  const header = ["No1", "First Name", "Last Name", "Post", "City"];

  const SortBy = () => {
    "name";
    "city";
  };

  const handleSort = (e) => {
    SortBy(e);
    setData((prevData) =>
      [...prevData].sort((a, b) => a[e].localeCompare(b[e]))
    );
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="table_data">
        <div className="table_functionality">
          <div className="firstname">
            <input
              type="radio"
              name="sort"
              onClick={() => handleSort("name")}
            />
            <label>Sort by First Name</label>
          </div>
          <div className="lastname">
            <input
              type="radio"
              name="sort"
              onClick={() => handleSort("city")}
            />
            <label>Sort by City</label>
          </div>
          <div className="reset_btn">
            <button type="reset" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              {header.map((data, index) => {
                return <th key={index}>{data}</th>;
              })}
            </tr>
          </thead>
          <tbody className="contain">
            {filterValue.map((item) => {
              const { id, name, lastname, post, city } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{lastname}</td>
                  <td>{post}</td>
                  <td>{city}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="main_pagination">
        <Pagination
          showPerPage={showPerPage}
          onPagination={onPagination}
          total={filterValue.length}
          page={page}
          setPage={setPage}
        />
        <div className="option_btn">
          Page :
          <select onChange={changeoptionpage}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DataTable;
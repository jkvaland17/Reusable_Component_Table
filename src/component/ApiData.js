import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setshowPerPage] = useState(50);
  const [pagination, setpagination] = useState({
    start: 0,
    end: showPerPage,
  });

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://63da3a9b19fffcd620c3dd70.mockapi.io/User"
      );
      response = await response.json();
      setData(response);
    }
    fetchMyAPI();
  }, [setshowPerPage]);

  const changeoptionpage = (event) => {
    let pagevalue = Math.floor(event.target.value);
    setshowPerPage(pagevalue);
  };

  //pagination start
  const onPagination = (start, end) => {
    setpagination({ start: start, end: end });
  };
  //pagination end

  const header = ["No", "First Name", "Last Name", "Post", "City"];

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
    window.location.reload(false);
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
            {data.slice(pagination.start, pagination.end).map((item) => {
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
        <Pagination showPerPage={showPerPage} onPagination={onPagination} />
        <div className="option_btn">
          <select onChange={changeoptionpage}>
            <option value="50">ALL</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ApiData;

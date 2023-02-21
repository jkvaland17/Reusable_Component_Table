import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import PagePagination from "./Pagination";
import Data from "./Data.json";
import TableData from "./TableData";
import Header from "./Header";
import Sorting from "./Sorting";

const CustomeTable = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [page, setPage] = useState();

  useEffect(() => {
    setData(Data);
  }, []);

  const SortBy = () => {
    "name";
    "city";
  };
  const handleSort = (key) => {
    SortBy(key);
    setData([...data].sort((a, b) => a[key].localeCompare(b[key])));
  };

  const reset = () => {
    window.location.reload();
  };
  const changeOption = (e) => {
    const pageValue = Number(e.target.value);
    setShowPerPage(pageValue);
  };
  const row = ["No", "First Name", "Last Name", "Post", "City"];
  return (
    <>
      <div className="table_data">
        <Sorting handleSort={handleSort} reset={reset} />
        <Table>
          <Header row={row} />
          <TableData data={data} page={page} showPerPage={showPerPage} />
        </Table>
      </div>
      <div className="main_pagination">
        <PagePagination
          showPerPage={showPerPage}
          onPagination={(start) => setPage(start / showPerPage)}
          total={data.length}
          page={page}
          setPage={setPage}
          changeOption={changeOption}
        />
      </div>
    </>
  );
};

export default CustomeTable;

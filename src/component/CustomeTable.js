import React, { useState, useEffect } from "react";
import PagePagination from "./Pagination";
import Data from "./Data.json";
import TableData from "./TableData";
import Sorting from "./Sorting";

const CustomeTable = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [page, setPage] = useState();
  const TData = data.slice(page * showPerPage, (page + 1) * showPerPage);

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
  const colums = [
    { field: "id", header: "NO" },
    { field: "name", header: "First Name" },
    { field: "lastname", header: "Last Name" },
    { field: "post", header: "Post" },
    { field: "city", header: "City" },
  ];

  return (
    <>
      <div className="table_data">
        <Sorting handleSort={handleSort} reset={reset} />
        <TableData data={TData} colums={colums} />
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

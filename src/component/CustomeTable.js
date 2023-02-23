import React, { useState, useMemo, useEffect } from "react";
import { Table } from "react-bootstrap";
import PagePagination from "./Pagination";

const CustomeTable = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [showPerPage, setShowPerPage] = useState(10);
  const [page, setPage] = useState();
  const [deldata, setdeldata] = useState([]);

  const sortedData = useMemo(() => {
    let sortedData = [...data];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    setdeldata(sortedData);
    return sortedData;
  }, [data, sortConfig]);

  useEffect(() => {}, [deldata,sortedData]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  //   pagination start
  const changeOption = (e) => {
    const pageValue = Number(e.target.value);
    setShowPerPage(pageValue);
  };
  // pagination end

  // remove colume start
  const handleDelete = (id) => {
    console.log(id);
    let abcd = deldata;
    abcd.splice(id, 1);
    console.log(abcd);
    setdeldata([...abcd]);
  };
  // remove colume end
  return (
    <>
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => requestSort(column.key)}>
                {column.label}
                {sortConfig &&
                  sortConfig.key === column.key &&
                  (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {deldata
            .slice(page * showPerPage, (page + 1) * showPerPage)
            .map((row, index) => (
              <tr key={row.id}>
                {columns.map((column) => {
                  if (column.key === "btn") {
                    return (
                      <button
                        onClick={() => handleDelete(index)}
                        key={column.key}
                      >
                        delete
                      </button>
                    );
                  }
                  return <td key={column.key}>{row[column.key]}</td>;
                })}
              </tr>
            ))}
        </tbody>
      </Table>
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
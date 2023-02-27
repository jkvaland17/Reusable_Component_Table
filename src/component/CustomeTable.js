import React, { useState, useMemo, useEffect } from "react";
import { Table } from "react-bootstrap";
import PagePagination from "./Pagination";
import Popup from "../component/Popup";

const CustomeTable = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [showPerPage, setShowPerPage] = useState(10);
  const [page, setPage] = useState();
  const [deldata, setdeldata] = useState([]);
  const [dataList, setDataList] = useState([]);

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

  useEffect(() => {}, [deldata, sortedData]);

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
  // const handleDelete = (id) => {
  //   let abcd = deldata;
  //   abcd.splice(id, 1);
  //   setdeldata([...abcd]);
  // };
  // remove colume end
  // const handelcheckbox = (e) => {
  //   const id = e.target.value;
  //   let checkbox = deldata.filter((fval) => {
  //     return fval.name.includes(id);
  //   });
  //   setFdata(checkbox);
  //   console.log(fdata);
  // };

  const p1 = (gd) => {
    let checkbox = deldata.filter((fval) => {
      return fval.name.includes(gd);
    });
    setDataList(checkbox);
    console.log(gd)
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column) => {
              let filsorter =
                column.sort === true ? (
                  <>
                    <span>
                      {column.label}
                      <i
                        style={{ marginLeft: "1rem" }}
                        className="fa-solid fa-sort"
                        onClick={() => requestSort(column.key)}
                      ></i>
                    </span>
                    <Popup passing={p1} />
                  </>
                ) : column.filter === true ? (
                  <Popup passing={p1} />
                ) : (
                  column.label
                );

              return <th key={column.key}>{filsorter}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {deldata
                .slice(page * showPerPage, (page + 1) * showPerPage)
                .map((row, index) => (
                  <tr key={row.id}>
                    {columns.map((column) => {
                      if (column.key === "action") {
                        return <td key={index}>{column.render(row)}</td>;
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

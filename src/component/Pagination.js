import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PagePagination = ({
  showPerPage,
  onPagination,
  total,
  page,
  setPage,
  changeOption,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [counter, setcounter] = useState(1);
  const pageval = new Array(Math.ceil(total / showPerPage)).fill("");

  useEffect(() => {
    const value = showPerPage * counter;
    onPagination(value - showPerPage, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  const previous = () => {
    page === 0 ? setPage(0) : setPage(page - 1);
  };
  const next = () => {
    pageval === page ? setPage(page) : setPage(page + 1);
  };
  return (
    <>
      <div className="row_filter">
        <Pagination>
          <Pagination.Prev onClick={previous} />
          {pageval.map((el, index) => {
            return (
              <Pagination.Item
                key={index}
                onClick={() => setPage(index + 1)}
                active={index + 1 === page ? "active" : null}
              >
                {index + 1}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            onClick={next}
            disabled={total / showPerPage === page}
          />
        </Pagination>
      </div>
      <div className="option_btn">
        Page :
        <select onChange={changeOption}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>
    </>
  );
};

export default PagePagination;

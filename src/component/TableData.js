import React from "react";

const TableData = ({ data, page, showPerPage }) => {
  const filteredData = data.slice(page * showPerPage, (page + 1) * showPerPage);
  return (
    <>
        <tbody className="contain">
          {filteredData.map(({ id, name, lastname, post, city }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{lastname}</td>
              <td>{post}</td>
              <td>{city}</td>
            </tr>
          ))}
        </tbody>
    </>
  );
};

export default TableData;

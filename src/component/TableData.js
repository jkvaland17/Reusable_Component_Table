import React from "react";
import { Table } from "react-bootstrap";

const TableData = ({ data = null, colums = null }) => {
  const getCaps = (head, field) => {
    if (head) return field.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <>
      <Table>
        <thead>
          <tr>
            {colums.map((head, index) => (
              <th key={index}>{getCaps(head.header, head.field)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="contain">
          {data &&
            data.map((row, index) => (
              <tr key={index}>
                {colums.map((col, index) => (
                  <td key={index}>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
      {data ? null : (
        <p style={{ textAlign: "center" }}>
          <strong>No Row To Show :)</strong>
        </p>
      )}
    </>
  );
};

export default TableData;

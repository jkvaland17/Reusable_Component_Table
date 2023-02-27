import React from "react";
import CustomeTable from "./CustomeTable";
import Data from "./Data.json";

const columns = [
  { key: "id", label: "NO" },
  { key: "name", label: "First Name", sort: true, filter: true },
  { key: "lastname", label: "Last Name" },
  { key: "post", label: "Post" },
  { key: "city", label: "City", sort: true },
  {
    key: "action",
    label: "Action",
    render: function (row) {
      return <button>Delete</button>;
    },
  },
];

const HomePage = () => {
  return (
    <>
      <CustomeTable data={Data} columns={columns} />
    </>
  );
};

export default HomePage;

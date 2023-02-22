import React from "react";
//import CustomeTable from "./CustomeTable";
import Demo from "../component/demo";
import Data from "./Data.json";

const columns = [
  { key: "id", label: "NO" },
  { key: "name", label: "First Name" },
  { key: "lastname", label: "Last Name" },
  { key: "post", label: "Post" },
  { key: "city", label: "City" },
];
const HomePage = () => {
  return (
    <>
      {/* <CustomeTable /> */}
      <Demo data={Data} columns={columns} />
    </>
  );
};

export default HomePage;

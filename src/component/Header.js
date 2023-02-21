import React from "react";
const Header = ({row}) => {
  return (
    <>
    <thead>
      <tr>
        {row.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
      </thead>
    </>
  );
};

export default Header;

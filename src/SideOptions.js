import React from "react";
import "./SideOptions.css";

function SideOptions({ Icons, title, number, selected }) {
  return (
    <div className={`sideOptions ${selected && "sidebarOptions__active"}`}>
      <Icons />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SideOptions;

import { IconButton } from "@mui/material";
import React from "react";

function SearchIcons({ Icons }) {
  return (
    <div className="searchicon" style={{ margin: "0px 5px" }}>
      <IconButton>
        <Icons />
      </IconButton>
    </div>
  );
}

export default SearchIcons;

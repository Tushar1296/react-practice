import "./Day09Card.css";
import React from "react";

import Grid from "./Grid";

function GridItem({ children, columns, rows }) {
  const itemStyle = {
    gridColumn: columns ? `span ${columns}` : "auto",
    gridRow: rows ? `span ${rows}` : "auto",
  };
  return (
    <div className="grid-item" style={itemStyle}>
      {children}
    </div>
  );
}

export default GridItem;

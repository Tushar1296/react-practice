import React from "react";

const Grid = ({ children, gap = 20 }) => {
  const shouldUseFlex = React.Children.count(children) < 3;

  if (shouldUseFlex) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: `${gap}px`,
          flexWrap: "wrap",
          padding: "20px 0",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: `${gap}px`,
        padding: "20px 0",
        maxWidth: "1000px", // 👈 KEY
        margin: "0 auto", // 👈 KEY
      }}
    >
      {children}
    </div>
  );
};

export default Grid;

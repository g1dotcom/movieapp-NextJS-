import React from "react";
import "./global.css";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default layout;

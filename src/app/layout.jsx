import React from "react";

//Css
import "./globals.css";

//components
import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default layout;

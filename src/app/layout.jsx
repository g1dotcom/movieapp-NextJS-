import React from "react";

//Css
import "./globals.css";

//components
import Header from "@/components/Header";
import Providers from "./Providers";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default layout;

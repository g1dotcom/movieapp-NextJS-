import React from "react";

//Css
import "./globals.css";

//components
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default layout;

"use client";

import React from "react";

//Theme Provider
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;

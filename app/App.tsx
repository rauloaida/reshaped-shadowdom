"use client";

import type { ReactNode } from "react";
import { Reshaped } from "reshaped";
import "../src/themes/productTheme/theme.css";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <Reshaped theme="productTheme">
      {children}
    </Reshaped>
  );
};

export default App;
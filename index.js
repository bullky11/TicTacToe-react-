import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Square from "./Square";
import Board from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>

);
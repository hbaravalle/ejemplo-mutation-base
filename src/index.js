import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

const query = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={query}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);

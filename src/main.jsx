import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ChainlitAPI, ChainlitContext } from "@chainlit/react-client";

const CHAINLIT_SERVER = import.meta.env.VITE_PLUTO_BACKEND;
const apiClient = new ChainlitAPI(CHAINLIT_SERVER, "webapp");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChainlitContext.Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-slate-700 w-full h-svh flex justify-center items-center flex-col">
      <App />
    </div>
  </React.StrictMode>
);

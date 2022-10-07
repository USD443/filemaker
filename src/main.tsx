import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter as Router } from "react-router-dom";

import { Index } from "./routes/Index";
import { MainMenu } from "./routes/MainMenu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/main" element={<MainMenu />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

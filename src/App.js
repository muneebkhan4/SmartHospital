import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import SearchDisease from "./Pages/SearchDisease";
import NotFound from "./Pages/NotFound";

function AppRoutes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Search-Disease" element={<SearchDisease />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

function App() {
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;

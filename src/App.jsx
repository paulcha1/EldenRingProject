import React from "react";
import "./App.css";
import BeastDetails from "./components/BeastDetails";
import BeastPage from "./components/BeastPage";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BottomFooter from "./components/BottomFooter";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route element="/BeastPage">
            <Route path="/BeastPage" element={<BeastPage />} />
            <Route path=":id" element={<BeastDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

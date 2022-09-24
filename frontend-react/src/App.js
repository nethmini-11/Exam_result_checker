import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddResult from "./components/add-result";
import Result from "./components/actions-result";
import ResultList from "./components/results-list";
import  cover from "./components/images/cover.jpg"
class App extends Component {
  render() {
    return (
      <div>
        <img className="imageheader" src = { cover } alt="Hotel" />
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/results"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/results"} className="nav-link">
                results
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ResultList/>} />
            <Route path="/results" element={<ResultList/>} />
            <Route path="/add" element={<AddResult/>} />
            <Route path="/results/:id" element={<Result/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

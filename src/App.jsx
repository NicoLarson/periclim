import './App.css';
import React, { useState, useEffect, Component } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <h1>Périclim</h1>
      <div className="container">
        <p>Bar de recherche</p>
        <p>Filtre</p>
        <p>Liste des articles</p>
        <p>Pagination</p>
      </div>
    </div >
  );
}

export default App;

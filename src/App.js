import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import Topo from "./components/Topo";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import "../src/index.css"


function App() {
  return (
    <Router>
      <>
        <Topo />
        <Routes>
          <Route exact path="/" render={Home} />
          <Route exact path="/frontend" render={() => <Frontend />} />
          <Route exact path="/programacao" render={() => <Programacao />} />
          <Route exact path="/design" render={() => <Design />} />
          <Route exact path="/catalogo" render={() => <Catalogo />} />
          <Route element={NotFound} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

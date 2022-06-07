import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {/*Route for Homepage*/}
          <Route path="/" exact>
            <div>
              <Navbar />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

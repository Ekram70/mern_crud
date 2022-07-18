import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ReadPage />}></Route>
            <Route exact path="/create" element={<CreatePage />}></Route>
            <Route exact path="/update/:id" element={<UpdatePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

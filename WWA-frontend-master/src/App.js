import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewBookingsPage from "./pages/ViewBookingsPage";
import Errorpage from "./pages/ErrorPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/bookings" element={<ViewBookingsPage />}></Route>
          <Route path="*" element={<Errorpage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

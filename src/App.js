import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Employees from "./components/Employees";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import CounterRedux from "./components/CounterRedux";
import EmployeesRedux from "./components/EmployeesRedux";
import UserListRedux from "./components/UserListRedux";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/employees'} element={<EmployeesRedux/>}/>
          <Route path={'/counter'} element={<CounterRedux/>}/>
          <Route path={'/users'} element={<UserListRedux/>}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;

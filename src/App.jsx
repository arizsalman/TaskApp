
// import'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import Login from './component/Login'

// function App() {

//   return (
//     <>
//      <h1> My FireBase Authantication</h1>
//      <Login></Login>
//     </>
//   )
// }

// export default App





import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import './App.css'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default App;

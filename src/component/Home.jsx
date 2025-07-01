import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate();
 const navigate=useNavigate()
  const goToLogin = () => {
    navigate('/login'); // Navigate to Login page
  };

  return (
    <>
    
      <nav className="navbar navbar-light bg-light px-4 ">
  <div className="container-fluid">
    <span className="navbar-brand mb-2   h1">My App</span>

    
    <button className="btn btn-outline-primary    me-4 ms-auto me-4" onClick={goToLogin}>
      Login
    </button>
  </div>
</nav>

    
      <div className="container mt-5">
        <h1>This is My Home Page</h1>
      </div>
    </>
  );
};

export default Home;

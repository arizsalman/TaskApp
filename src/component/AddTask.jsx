

import React, { useEffect, useState } from 'react';
import { gapi } from "gapi-script";
// import { signInWithPopup } from 'firebase/auth/web-extension';
import { signInWithPopup } from 'firebase/auth'; 

import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth,provider } from '../firebase/firebase';

import WellcomeMasege from './WellcomeMasege';

import TodoType1 from './TodoType1';
import'bootstrap/dist/css/bootstrap.min.css'
import TodoItem from './TodoItem.jsx';






const App = () => {
  const [user, setUser] = useState(null);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleNewItem = (name, date) => {
    const newItem = { name, date };
    setTodoList([...todoList, newItem]);
  };

  const handleDeleteClick = (nameToDelete) => {
    const newList = todoList.filter(item => item.name !== nameToDelete);
    setTodoList(newList);
  };

  if (!user) {
    return (
      <div className="text-center mt-5">
        <h2>Please sign in to use the Todo App</h2>
        <button className="btn btn-primary" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Todo App + Google Calendar</h1>
      {/* <GoogleAuth /> */}
      
      <div className="d-flex justify-content-between align-items-center">
        {/* <h2>Hello, {user.displayName}</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Sign Out
        </button> */}
      </div>
        <WellcomeMasege></WellcomeMasege>
  
          < TodoItem onNewItem={handleNewItem} />
      {todoList.map((item, index) => (
           <TodoType1
        
           key={index}
           todoName={item.name}
           todoDate={item.date}
           onDeleteClick={handleDeleteClick}
        />
        


      ))}

    </div>
  );
};

export default App;
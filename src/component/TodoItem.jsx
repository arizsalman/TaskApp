import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import'bootstrap/dist/css/bootstrap.min.css'

const TodoItem = ({onNewItem}) => {
  const [todoName,settodoName]=useState('' );
  const [todoDate,settodoDate]=useState( '');
  
  const handleNameChange=(event)=>{
    settodoName(event.target.value)
    // console.log(event);
    
  };
  const handleDateChange=(event)=>{
    settodoDate(event.target.value)
  };
  
  const handleAddButtonClicked = () =>{
    onNewItem(todoName,todoDate)
    settodoName('')
    settodoDate('')
  };


  return (
    <div>
          <div className="row">
    <div className="col-6" > 
      <input type='text'  value={todoName}
      placeholder='Enter Todo Here' 
      onChange={handleNameChange}
      />
    </div>
    <div className="col-4">
       <input type="date"  value={todoDate}
     onChange={handleDateChange}
     />
     </div>
    <div className="col-2">
      <button type="button" className="btn btn-success"
      onClick={handleAddButtonClicked}
      >
        <IoIosAddCircle />
        </button>
    </div>
  </div>
    </div>
  )
}

export default TodoItem

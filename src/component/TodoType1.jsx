import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import'bootstrap/dist/css/bootstrap.min.css'



const TodoType1 = ({todoName,todoDate,onDeleteClick}) => { 
  
  return (
    <div>
        <div className="row">
    <div className="col-6" > {todoName}</div>
    <div className="col-4"> {todoDate} </div>

    <div className="col-2"><button type="button" className="btn btn-danger"
     onClick={()=>onDeleteClick(todoName)}
    >
      <RiDeleteBin5Line />
      
      

      </button>
    </div>
  </div>
    </div>
  )
}

export default TodoType1
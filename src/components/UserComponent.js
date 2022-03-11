import React from 'react'
import './userButton.css'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

function UserComponent() {
  const users = useSelector((state)=>state.allusers.users);
  let c=1;
  const renderList = users.map((user)=>{
    const { id } = user;
    return(
        <Link to={`/user/${id}`}>
          <button className='btn'>Get user {c++}</button>
        </Link>
    ) 
  })

  return (
    <div className='list-container'>
        {renderList}
    </div>
  )
}

export default UserComponent
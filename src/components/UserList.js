import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setusers} from '../redux/actions/action'
import UserComponent from './UserComponent'
import axios from 'axios'
import Info from './Info'


function UserList() {
  const dispatch = useDispatch()
  const users = useSelector((state)=>state.allusers.users)
  const fetchUsers = async() => {
      const response = await axios.get("https://reqres.in/api/users")
      .catch((err)=>{
          console.log(err)
      })
      console.log(response.data.data) 
      dispatch(setusers(response.data.data))
  }

  useEffect(()=>{
    fetchUsers()
  }, [])

  return (
    <div>
        <Info />
        <UserComponent />
    </div>
  )
}

export default UserList
import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './userDetails.css'
import axios from 'axios';
import {selecteduser} from '../redux/actions/action'

function UserDetails() {
  const { userId } = useParams();
  let user = useSelector((state) => state.user.user);
  console.log("user", user)
  const { email, first_name, last_name, avatar } = user;

  const dispatch = useDispatch();

  const fetchuserDetail = async (id) => {
    const response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((err) => {
        console.log(err);
      });
    console.log("Signle user", response.data.data)
    dispatch(selecteduser(response.data.data));
  };

  useEffect(() => {
    if (userId && userId !== "") fetchuserDetail(userId);
  }, [userId]);

  return (
    <div className='user-container'>
        <div className='container'>
            <div className='user-img'>
              <img src={avatar} alt='user avatar'/>
            </div>

            <div className='user-details'>
              <p>Email📧:</p>
              <p>{email}</p>
            </div>

            <div className='user-details'>
              <p>First name✔️:</p>
              <p>{first_name}</p>
            </div>

            <div className='user-details'>
              <p>Last name👍:</p>
              <p>{last_name}</p>
            </div>
        </div>
    </div>
  )
}

export default UserDetails
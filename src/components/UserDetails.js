import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './userDetails.css'
import axios from 'axios';
import {selecteduser} from '../redux/actions/action'
import ClipLoader from "react-spinners/ClipLoader";

function UserDetails() {
  const { userId } = useParams();
  const userinfo = useSelector((state) => state.user);
  console.log("user", userinfo)
  // const { email, first_name, last_name, avatar } = userinfo;

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
    if (userId && userId !== "") 
      fetchuserDetail(userId);
  }, []);

  return (
    <div className='user-container'>
        {Object.keys(userinfo).length === 0 ? (
          
          <div>...Loading</div>
        ) : (
          <div className='container'>

            <div className='user-img'>
              <img src={userinfo.payload?.avatar} alt='user avatar'/>
            </div>

            <div className='user-details'>
              <p>Email📧:</p>
              <p>{userinfo.payload?.email}</p>
            </div>

            <div className='user-details'>
              <p>First name✔️:</p>
              <p>{userinfo.payload?.first_name}</p>
            </div>

            <div className='user-details'>
              <p>Last name👍:</p>
              <p>{userinfo.payload?.last_name}</p>
            </div>
        </div> 
        )}
    </div>
  )
}

export default UserDetails
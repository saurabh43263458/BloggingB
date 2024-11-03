import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authslice'
import "./logout.css"
const Logout = () => {
    const dispatch =useDispatch();
    const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
    <button onClick={logoutHandler}>LogOut</button>
  )
}

export default Logout
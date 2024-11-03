import React from 'react'
import "./Header.css"; 
import Container from "./container/Container"
import Logout from './Logout';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
  const authStatus = useSelector((state)=> state.auth.status);
  const navigate = useNavigate();
  
  const navItems =[
    {
      name: "Home",
      slug: "/",
      active:true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <div className="main-div-header">
    <Container>
    <div className="main-div-sub-header ">
    <div className='logo-main'>
        <div className="logo-main-div-header"><img src=".\src\components\Bigo_2.webp" alt="img"  className='img-header-logo'/></div>
      </div>
      <div className="main-div-sub2-header">
        <ul className='ul-header'>
          {
            navItems.map((item)=>item.active ?(<li key={item.name}><button onClick={()=>navigate(item.slug) } className="button-header">{item.name}</button></li>): null)
          }
          {authStatus && (
            <li><Logout/></li>
          )}
        </ul>
      </div>
    </div>
    </Container>
    </div>
  )
}

export default Header

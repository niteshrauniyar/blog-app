import React from 'react'
import {Container , Logo , LogoutButton} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
name:"Login",
slug: "/login",
active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name:"Add Post"
    }
  ]



  return (
    <div>Header</div>
  )
}

export default Header
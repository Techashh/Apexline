import React from 'react'
import { Link } from 'react-router'
import img from "/public/logo.png"


const Header = () => {
  return (
    <div id="header">
        <img src={img} alt="logo" id="logo"/>
        <p><b><i>APEXLINE</i></b></p>
        <Link to={"/"} class="header_link" style={{marginLeft:"300px"}}>Home </Link>
        <Link to={"/About"} class="header_link">About us </Link>
        <Link to={"/Import"} class="header_link">Import </Link>
        <Link to={"/Exportcomponent"}class="header_link">Export </Link>
        <Link class="header_link">Products </Link>
        <Link class="header_link" id="a1">Contact Support</Link>
    </div>
  )
}

export default Header

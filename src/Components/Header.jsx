import React, { useEffect, useState } from 'react'
import '../Styles/header.css';

const Header = (props) => {

  const[theme, setTheme]=useState("light-theme")

  const changeTheme=()=>{
    if(theme === "light-theme"){
      setTheme("dark-theme")
    }
    else{
      setTheme("light-theme")
    }
  }

  useEffect(()=>{
    document.body.className=theme;
  },[theme]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg nav ">
  <div className="container-fluid div1">
    <a className="navbar-brand" href="/">{props.name}</a>



    <div className="collapse navbar-collapse list" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 list1">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Services</a> */}
          <div class="dropdown">
  <button className="btn dropdown-toggle drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Sports</a></li>
    <li><a className="dropdown-item" href="/">Politics</a></li>
    <li><a className="dropdown-item" href="/">Business</a></li>
  </ul>
</div>
        </li>
        {/* <li className="nav-item dropdown">
        <a className="nav-link" href="#">About</a>
        </li> */}
      </ul>
    </div>

    <form className="d-flex buttons" role="search">
        <button className="button" type="button" href="#" onClick={()=>changeTheme()}>Change Theme</button>
        
      </form>



  </div>
</nav>
</div>
  )
}

export default Header
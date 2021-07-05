import React from 'react';
import logo from './John_deere_logo.jpeg';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{ width:'45%',height:'50px'}} /></a>
      <form className="d-flex">
      <ul class="nav flex-column">
  <li class="nav-item">
  <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"black"}}>
            English
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Bulgeria</a></li>
            <li><a className="dropdown-item" href="#">Greek</a></li>
            <li><a className="dropdown-item" href="#">English</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </li>
  <li class="nav-item">
  <p style={{color:"black"}}><b>Dealer Locator</b></p>
  </li>
</ul>
      </form>
  </div>
</nav>
        </div>
    )
}

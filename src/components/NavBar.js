import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light fixed-top navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img src="https://www.medstarhealth.org/content/themes/medstarhealth-specialty-parent/assets/img/logo.png" alt="medstar logo"/>
              </Link>
              <div class="" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto" >
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Options
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Login</a>
                    <a class="dropdown-item" href="#">Register</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Contact Us</a>
                  </div>
                </li>
              </ul>
              </div>
            </nav>
        )
    }
}

export default NavBar
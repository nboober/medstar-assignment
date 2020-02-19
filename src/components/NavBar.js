import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light fixed-top">
              <Link className="navbar-brand" to="/">
                <img src="https://www.medstarhealth.org/content/themes/medstarhealth-specialty-parent/assets/img/logo.png" alt="medstar logo"/>
              </Link>
            </nav>
        )
    }
}

export default NavBar
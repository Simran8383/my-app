import React from 'react'


export default function Navbar(props) {
  return(

  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">

      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">{props.aboutText}</a>
          </li>
        </ul>
    
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
    <input className="form-check-input mx-1" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  </div>
      </div>
    </div>
  

</nav>    
  )
}

//Proptypes

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }

Navbar.defaultProps = {
  title: "modifav title",
  aboutText: "About"
}
/*
PROPS:- 
Basically props are used to fill in the blanks in a component. Like in navbar ( about us, home , contact us). They all can be changed with the help of props and because of which the whole component can be somewhere else
PROPRYPES:- these are used to assign the type of props like object or string
DEFAULT PROPS:- 
If there is no props set then the value from default prop is taken

*/
import React from 'react'
import PropTypes from 'prop-types'
import Mode from './Mode'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  const colorRed=()=>{
    document.body.style.backgroundColor='#872341'
  }
  const colorBrown=()=>{
    document.body.style.backgroundColor='#6B240C'
  }
  const mode1=()=>{
    props.setMode('#6B240C');
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
    
    <button class="btn mx-2" onClick={colorRed} style={{backgroundColor:'#872341',borderRadius:'0px',width:'2px'}} ></button>
    <button class="btn mx-2" onClick={colorBrown} style={{backgroundColor:'#6B240C',borderRadius:'0px',width:'2px'}} ></button>

    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
  </div>
  
</nav>
  )
}
NavBar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string,
}



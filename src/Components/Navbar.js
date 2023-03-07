import React from 'react'
import logo  from './logo2.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <span className="navbar-brand text-light mb-0 h1">
                    <img src={logo} alt="logo" width="30px"/> alpha</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar

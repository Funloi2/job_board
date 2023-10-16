import logo from '../Assets/Logo.png';
import {NavLink} from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";


function Header() {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);



    const openLogin = () => {
        setIsLoginOpen(true);
    }

    const closeLogin = () => {
        setIsLoginOpen(false);
    }

    const openRegister = () => {
        setIsRegisterOpen(true);
    }

    const closeRegister = () => {
        setIsRegisterOpen(false);
    }

    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                        <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link me-2 " aria-current="page">Job Board</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button onClick={openLogin} className="nav-link me-2 btn btn-link" aria-current="page">Login</button>
                                <Login isOpen={isLoginOpen} onClose={closeLogin} />
                            </li>
                            <li className="nav-item">
                                <button onClick={openRegister} className="nav-link me-2 btn btn-link" aria-current="page">Register</button>
                                <Register isOpen={isRegisterOpen} onClose={closeRegister} />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;
import logo from '../Assets/logo.svg';
import {NavLink} from "react-router-dom";


function Header() {


    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-brand">
                        <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    </button>
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
                                <NavLink to="/login" className="nav-link me-2" aria-current="page">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link me-2" aria-current="page">Register</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;
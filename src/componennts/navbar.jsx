import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"



class NavBar extends React.Component {

    render() {
        // console.log(this.props)
        return <div style={{marginBottom:"30px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgba(56, 53, 53, 0.897)" }}>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/moviepage">Movies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Feedback">Feedback</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>



    }
}

export default NavBar










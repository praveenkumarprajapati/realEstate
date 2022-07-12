import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand">
            <h3 className="navbar-brand p-1 mx-3" style={{ cursor: "pointer" }}><span className="h2">HBS P</span>roperties</h3>
            <ul className="navbar-nav">
                <li className="navbar-item mx-4 h6">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item mx-4 h6">
                    <Link to="/createAdvertisement" className="nav-link">Create New</Link>
                </li>
                <li className="navbar-item mx-4 h6">
                    <a href="#allAdd" className="nav-link">Advertisements</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
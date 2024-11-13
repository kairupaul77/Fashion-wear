import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FASHION WEAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/shop" className="nav-link" href="#">Shop</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/login" className="nav-link" href="#"> <button>Login</button></Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/cart" className="nav-link" href="#"> <i className="fa-solid fa-cart-shopping"></i> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;
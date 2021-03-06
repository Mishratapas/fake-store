import {Link, useNavigate} from "react-router-dom";

import {FaSignOutAlt} from "react-icons/fa";
import {BsFillCartCheckFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import {useUserAuth} from "../../context/UserAuthContext";

const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  const {user, logOut} = useUserAuth();
  const navigate = useNavigate();
  const handlelogOut = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-opacity-75 py-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/home">
          Fake Store
        </Link>
        <div>
          <h6>Hello, {user && user.email}</h6>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn">
              <button
                className="btn btn-outline-dark ms-2"
                onClick={handlelogOut}
              >
                <FaSignOutAlt size={25} />
                Sign Out
              </button>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <BsFillCartCheckFill />
                Cart ({cartTotalQuantity})
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import styles from "./Navbar.module.css";
import { BsCartFill } from "react-icons/bs";
import useCart from "../hooks/useCart";
import Image from "next/image";

const styling = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  padding: "4px",
};

const Navbar = (props) => {
  const { cart, quantity } = useCart();

  //const {openCart} = useCart();
  const handleClick = () => {
    props.openCart();
  };
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <div style={styling}>KasieJ</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/category/Earrings">
                <div style={styling}>Earrings</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/category/Necklaces">
                <div style={styling}>Necklace</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#">
                <div style={styling}>Bracelet</div>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div style={styling}>Dropdown</div>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
          <div className="nav-item">
            <div className="position-absolute top-0 end-0">
              <span className="badge bg-danger">{quantity}</span>
            </div>
            <button className="btn btn-outline-secondary m-1" href="#">
              <i className="bi bi-cart" onClick={handleClick}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

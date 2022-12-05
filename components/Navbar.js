import Link from "next/link";
import useCart from "../hooks/useCart";
import useSearchBox from "../hooks/useSearchBox";

const styling = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  padding: "4px",
};

const Navbar = (props) => {
  const { cart, quantity } = useCart();
  const { keyword, onInputChange } = useSearchBox();

  const handleClick = () => {
    props.openCart();
  };

  const handleOnchange = (e) => {
    onInputChange(e.target.value.toLowerCase());
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
              <Link
                className="nav-link active"
                aria-current="page"
                href="/category/Earrings"
              >
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
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search product here"
              aria-label="Search"
              onChange={handleOnchange}
            />
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

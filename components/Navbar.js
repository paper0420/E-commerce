import Link from "next/link";
import styles from './Navbar.module.css'
import { BsCartFill } from "react-icons/bs";
import useCart from '../hooks/useCart'
import Image from 'next/image'



const Navbar = (props) => {

    //const {openCart} = useCart();
    const handleClick = () =>{
        props.openCart();
    }
    return (
        // <div className={styles.nav}>
        //     <Link href="/">
        //         <a className="btn btn-outline-success me-2" >Home</a>
        //     </Link>
        //     <BsCartFill className={styles.cart} 
        //     onClick={handleClick}/>
        // </div>

        // <nav className="navbar bg-light">
        //     <form className="container-fluid justify-content-start">
        //     <button className="btn btn-outline-success me-2" type="button">Main button</button>
        //     <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        //     </form>
        // </nav>

        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">KasieJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Earring</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/necklace">Necklace</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Bracelet</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="nav-item">
          <button className="btn btn-outline-success m-1" href="#">
            <i className="bi bi-cart" onClick={handleClick}></i>
            </button>
        </div>
    </div>
  </div>
</nav>


    );
};

export default Navbar;
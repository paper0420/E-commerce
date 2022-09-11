import Link from "next/link";
import styles from './Navbar.module.css'
import { BsCartFill } from "react-icons/bs";
import useCart from '../hooks/useCart'
const Navbar = () => {
    const {Opencart} = useCart();
    const handleClick = () =>{
        openCart();
    }
    return (
        <div className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <BsCartFill className={styles.cart} 
            onClick={handleClick}/>
        </div>

    );
};

export default Navbar;
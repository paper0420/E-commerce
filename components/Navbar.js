import Link from "next/link";
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>

    );
};

export default Navbar;
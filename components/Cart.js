import styles from './Cart.module.scss'
import { BsXSquareFill } from "react-icons/bs";
import useCart from '../hooks/useCart';
import { useRouter } from 'next/router';

const Cart = (props) => {
    const {cart,total} = useCart();
    const router = useRouter();

    const handleClick = () => {
        props.closeCart();
    }

    const navigateToCheckout = () => {
        props.closeCart();
        router.push("/checkout");
    }

    return(
        <div className={`${styles.container} ${props.isOpen ? styles.active: ''}`}>
            <div className={styles.xContainer}>
                <BsXSquareFill className={styles.xIcon}
                onClick={handleClick}/>
            </div>

            <div className={styles.content}>
                <div className={styles.title}>My Cart</div>
                {cart.length > 0 ? (
                    <>
                        <ul className={styles.ul}>
                        {cart.map((item)=>{
                            return (
                            <li className={styles.item} key={item.id}>
                                <span>{item.qty} X {item.name}</span>
                                <span>${item.price/100}</span>
                            </li>
                            )
                        })}
                        </ul>
                        <div className={styles.total}>
                            <span>Total</span>
                            <span>${total/100}</span>
                        </div>
                        <button className={styles.checkoutButton} onClick={navigateToCheckout}>Checkout</button>
                    </>
                ): <p>Cart is empty!</p>}
                

            </div>
        </div>
       
    )
}

export default Cart;
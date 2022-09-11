import styles from './Cart.module.css'
import { BsXSquareFill } from "react-icons/bs";
import useCart from '../hooks/useCart';
const Cart = () => {
    const {cart,isOpen,openCart,closeCart} = useCart();
    const handleClick = () => {
        closeCart();
    }

    return(
        <div className={styles.container}>
            <div className={styles.xContainer}>
                <BsXSquareFill className={styles.xIcon}
                onClick={handleClick}/>
            </div>

            <div className={styles.content}>
                <div className={styles.title}>My Cart</div>
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
                    <span>$500</span>
                </div>
                <button className={styles.button}>Checkout</button>

            </div>
        </div>
       
    )
}

export default Cart;
import useCart from '../hooks/useCart';
import styles from './checkout.module.scss'
import {loadStripe} from '@stripe/stripe-js'

const Checkout = () => {
    const { cart, total } = useCart();

    const processPayment = async () => {
        const url = "/.vercel/api/checkout_session";
        const newCart = cart.map(({id,qty})=>({
            id,
            qty,
        }));
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
        const {data} = await fetch(url,{cart:newCart});

        //await stripe.redirectToCheckout({sessionId:data.id});
    };

    return (
        <div>
            <h1>Checkout</h1>
            {cart.length > 0 ? (
            <div>
                <ul className={styles.ul}>
                        {cart.map((item) => {
                    return (
                    <li className={styles.item} key={item.id}>
                        <span>{item.qty} X {item.name}</span>
                                    <span>${item.price / 100}</span>
                    </li>
                    )
                })}
                </ul>
                <div className={styles.total}>
                    <span>Total</span>
                        <span>${total / 100}</span>
                </div>
                <button className={styles.checkoutButton} onClick={processPayment}>Process Payment</button>
            </div>
            ) : (
                <p>No item</p>
            )}           

        </div>

    )

}

export default Checkout;
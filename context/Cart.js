import { createContext,useState,useEffect } from "react";

export const Context = createContext();

const Cart = ({children})=>{
    const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
    const [cart,setCart] = useState([]);
    const [isOpen,setIsOpen] = useState(false);
    
    useEffect(()=>{
        const initialCart = getInitialCart();
        console.log("Initail: "+initialCart);

        if(initialCart){
            setCart(initialCart);
        }

    },[])


    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])

    const openCart = () => {
        setIsOpen(true);
    }
    const closeCart = () => {
        setIsOpen(false);
    }
    const addItemToCart = (product,qty=1)=>{
        const item = cart.find(i=> i.id === product.id);
        if(item){
            //increase qty
            item.qty += qty;
            setCart([...cart]);
        }else{
            setCart([...cart,{...product,qty}])
        }


    };
    const remoeItemFromCart =(id)=>{
        const newCart = cart.filter(item=>{
            return item.id !== id
        });
        setCart(newCart);
    }

    const exposed = {
        cart,
        addItemToCart,
        remoeItemFromCart,
        openCart,
        closeCart,
        isOpen
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
};

export default Cart;
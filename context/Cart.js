import { createContext,useState,useEffect } from "react";

export const Context = createContext();

const Cart = ({children})=>{
    const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    
    useEffect(()=>{
        const initialCart = getInitialCart();
        console.log("Initail: "+initialCart);

        if(initialCart){
            setCart(initialCart);
        }

    },[])


    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));

        let newtotal = 0;
        cart.forEach(item=>newtotal+=item.price*item.qty);
        setTotal(newtotal);
    },[cart])

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

    const clearCart = ()=> {
        localStorage.removeItem("cart");
        setCart([]);
    }

    const exposed = {
        cart,
        addItemToCart,
        remoeItemFromCart,
        total,
        clearCart
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
};

export default Cart;
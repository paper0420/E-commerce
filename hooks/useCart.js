import { useState,useEffect } from "react";

const useCart = () => {
    const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        const initialCart = getInitialCart();
        console.log("Initail: "+initialCart);

        if(initialCart){
            setCart(initialCart);
        }
        console.log("Hi");

    },[])


    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])


    const addItemToCart = (id,qty=1)=>{
        const item = cart.find(i=> i.id === id);
        if(item){
            //increase qty
            item.qty += qty;
            setCart([...cart]);
        }else{
            setCart([...cart,{id,qty}])
        }


    };
    const remoeItemFromCart =(id)=>{
        const newCart = cart.filter(item=>{
            return item.id !== id
        });
        setCart(newCart);
    }

    return{
        cart,
        addItemToCart,
        remoeItemFromCart,
    }
}

export default useCart;
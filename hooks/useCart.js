import { useContext } from 'react'
import { Context } from '../context/Cart'

const useCart = () => {
    const context = useContext(Context);
    return context;
}

export default useCart;
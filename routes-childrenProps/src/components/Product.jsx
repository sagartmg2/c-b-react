import React from 'react'
import { decrement, increment } from '../redux/slice/cartSlice'
import { useDispatch } from 'react-redux'


export default function Product({ product, setcartCount, cartCount }) {
    
    const dispatch = useDispatch() // return () =>{}

    function addToCart() {
        setcartCount(cartCount + 1)
    }

    function addToReduxCart() {
        dispatch(increment())
        // dispatch(decrement())
    }

    return (
        <div>
            <img width={150} height={150} src={product.thumbnail} alt="" />
            <button onClick={addToReduxCart}>add To Redux Cart</button>
            <button onClick={addToCart}>add To Cart</button>
        </div>
    )
}

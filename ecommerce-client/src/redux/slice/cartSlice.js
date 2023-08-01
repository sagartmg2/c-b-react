import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

// value: [
//   {_id,name,price,quanity:1},
//   {_id,name,price,quanity:1},
//   {_id,name,price,quanity:1},
// ]

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setReduxCart: (state, action) => {
      state.cartItems = action.payload
    },
    addToRecuxCart: (state, action) => {

      let product = action.payload  // 
      let oldItems = [...state.cartItems]
      let { _id, name, price } = product


      /* if already exists .. increment the quanity only ,  else crate new cart-Item */

      let matched = oldItems.find(el => el._id == _id)  //{ _id,name,quantiy} // undefined

      if (matched) {
        oldItems = oldItems.map(el => {
          if (el._id === _id) {
            return { ...el, quantity: el.quantity + 1 }
          }
          return el
        })

      } else {
        oldItems.push({ _id, name, price, quantity: 1 })
      }


      state.cartItems = oldItems
    },
    decrement: (state,action) => {
      let _id = action.payload
      let oldItems = [...state.cartItems]
      /*  */
    }

  },
})

// Action creators are generated for each case reducer function
export const { setReduxCart, addToRecuxCart } = cartSlice.actions

export default cartSlice.reducer
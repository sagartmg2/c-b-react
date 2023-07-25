import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
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
    setReduxcart: (state, action) => {
      state.value = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setReduxcart } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 100,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value = state.value - 1
        },
        increment: (state) => {
            console.log("increment..")
            state.value = state.value + 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment,decrement } = cartSlice.actions

export default cartSlice.reducer
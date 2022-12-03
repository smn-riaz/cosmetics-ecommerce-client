import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
        totalQuantity:0,

    },
    reducers:{
        addItemToCart:(state, action)=> {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            
            if(!existingItem){
                state.items.push(newItem)
            } else {
                existingItem.quantity = existingItem.quantity + newItem.quantity
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            state.totalQuantity = state.items.length
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            // const existingItem = state.items.find(item => item.id === id)
            
            
                state.items = state.items.filter(item => item.id !== id);

          
            state.totalQuantity = state.items.length
        },
        deleteItemFromCart(state, action) {
            const id = action.payload;
            // const existingItem = state.items.find(item => item.id === id)
            
            
                state.items = state.items.filter(item => item.id !== id);

          
            state.totalQuantity = state.items.length
        },
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer;
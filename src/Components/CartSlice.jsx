import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const CartSlice = createSlice({ //initializes a cart slice with createSlice Redux Toolkit
    name: 'cart',
    initialState,
    reducers: { // key is name of the action and value is the reducer function

        // adding an item to the cart
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        // removing an item form the cart
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        // clearing the entire cart
        clearCart(state) {
            state.cartItems = []; // sets cart to empty array
        },

        // increases the quantity of a specific item in cart
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },

        // decreases the quantity of a specific item
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
    }
});

// exporting action creators and reducer
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;



import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../constants/cartItems'

const initialState = {
    items : cartItems,
    totalAmount: 0, //전체 수량
    totalPrice: 0, //전체 금액
};

export const cartSlice = createSlice ({
    name : 'cartfunction',
    initialState,
    reducers : {
        increase : (state, action) => {
            const album = state.items.find(album => album.id === action.payload);
            if (album) {
                album.amount += 1;
            }
        },
        decrease : (state, action) => {
            const album = state.items.find(album => album.id === action.payload);
            if (album.amount > 0) {
                album.amount -= 1;
            }
        },
        removeItem : (state, action) => {
            const album = state.items.find(album => album.id === action.payload);
            if (album.amount < 1) {
                state.items = state.items.filter(album => album.id !== action.payload);
            }
        },
        clearCart : (state) => {
            state.items = [];
        },
        calculateTotals : (state) => {
            let totalAmount = 0;
            let totalPrice = 0;
            state.items.forEach(item => {
                totalAmount += item.amount;
                totalPrice += item.amount * item.price;
            });
            state.totalAmount = totalAmount;
            state.totalPrice = totalPrice;
        },
    },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
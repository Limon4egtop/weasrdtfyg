import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], total: 0 },
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) item.quantity += 1;
            else state.items.push({ ...action.payload, quantity: 1 });
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item.quantity > 1) item.quantity -= 1;
            else state.items = state.items.filter(i => i.id !== action.payload.id);
            state.total -= action.payload.price;
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

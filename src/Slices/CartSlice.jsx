import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'favorite',
  initialState: {
    cartProducts: [],
    message: '',
  },
  reducers: {
    toggleCart: (state, action) => {
      console.log(action, 'actin');
      const isExist = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { toggleCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

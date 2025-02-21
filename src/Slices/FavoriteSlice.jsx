import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteProducts: [],
    message: 'Product added to Cart',
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isExist = state.favoriteProducts.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        state.favoriteProducts = state.favoriteProducts.filter(
          (item) => item.id !== action.payload.id
        );
        state.message = 'Product removed from favorite';
      } else {
        state.favoriteProducts.push(action.payload);
        if (state.favoriteProducts.length === 1) {
          state.message = 'Product added to Cart';
        } else if (state.favoriteProducts.length === 0) {
          state.message = 'Product removed';
        }
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

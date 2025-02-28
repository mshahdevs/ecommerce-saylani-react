import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteProducts: [],
    message: '',
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
        state.message = 'Product removed favorite';
      } else {
        state.favoriteProducts.push(action.payload);
        state.message = 'Product added';
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    message: '',
    filterProducts: [],
    searchQuery: '',
    category: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filterProducts = productSlice.caseReducers.titleFilter(state);
    },
    titleFilter: (state) => {
      const { products, searchQuery } = state;
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.filterProducts = productSlice.caseReducers.categoryFilter(state);
    },
    categoryFilter: (state) => {
      const { products, category } = state;
      return category
        ? products?.filter((product) => product.category.name === category)
        : products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.filterProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message;
      });
  },
});
export const { setSearchQuery, setCategory } = productSlice.actions;
export default productSlice.reducer;

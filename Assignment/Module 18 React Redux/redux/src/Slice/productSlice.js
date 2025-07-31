import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read function
export const productRead = createAsyncThunk(
  'productRead', async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://68289cd56075e87073a45ca5.mockapi.io/Product");
      const result = await res.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// add new product
export const productAdd = createAsyncThunk(
  'productAdd', async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("https://68289cd56075e87073a45ca5.mockapi.io/Product", data);
      const result = await res.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete product
export const productDelete = createAsyncThunk(
  'productDelete', async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`https://68289cd56075e87073a45ca5.mockapi.io/Product/${id}`);
      const result = await res.data;
      return id;  // return id to filter in reducer
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update product
export const productUpdate = createAsyncThunk(
  'productUpdate', async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`https://68289cd56075e87073a45ca5.mockapi.io/Product/${data.id}`, data);
      const result = await res.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "productDetails",
  initialState: {
    products: [],
    loading: false,
    error: ""
  },
  reducers: {
    // pending
    productPending: (state) => {
      state.loading = true;
    },
    // fulfilled
    productFulfilled: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    // rejected
    productRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // read
      .addCase(productRead.pending, (state) => {
        state.loading = true;
      })
      .addCase(productRead.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // add
      .addCase(productAdd.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAdd.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(productAdd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete
      .addCase(productDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(productDelete.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out deleted product by ID
        state.products = state.products.filter(product => product.id !== action.payload);
      })
      .addCase(productDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update
      .addCase(productUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(productUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(productUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { productPending, productFulfilled, productRejected } = productSlice.actions;

export default productSlice.reducer;
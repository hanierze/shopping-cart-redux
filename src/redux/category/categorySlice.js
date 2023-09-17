import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  categories: [],
  error: "",
};

export const fetchCategories = createAsyncThunk("category/fetchCategories",async () => 
 await axios
    .get(`${process.env.REACT_APP_API_URL}/categories`)
    .then((res) => res.data.data)
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export const selectCategories = (state) => state.categoryState.categories;
export default categorySlice.reducer;

import { createReducer } from "@reduxjs/toolkit";
const initialCartState = {
  count: 0,
  Product: [],
  SearchN: "",
  SearchP: 0,
};

const UpdateState = createReducer(initialCartState, {
  ADD_TO_CART: (state, action) => {
    state.count += 1;
    const {
      Product_Name,
      Product_Price,
      Product_Catogaries,
      id,
      User_id,
      Product_Main_Image,
    } = action.payload;
    state.Product.push({
      Name: Product_Name,
      Price: Product_Price,
      Cat: Product_Catogaries,
      Product_Main_Image,
      id,
      User_id,
      Qunatity: 1,
    });
  },
  Quantity_INC: (state, action) => {
    state.Product.forEach((val, index) => {
      if (index === action.payload) {
        val.Qunatity += 1;
      }
    });
  },
  Quantity_DEC: (state, action) => {
    state.Product.forEach((val, index) => {
      if (index === action.payload && val.Qunatity !== 1) {
        val.Qunatity -= 1;
      }
    });
  },
  REMOVE_TO_CART: (state, action) => {
    state.count -= 1;
    state.Product = state.Product.filter((value, index) => {
      return index !== action.payload;
    });
  },
  Search_Name: (state, action) => {
    state.SearchN = action.payload;
  },
  Search_Price: (state, action) => {
    state.SearchP = action.payload;
  },
});

export default UpdateState;

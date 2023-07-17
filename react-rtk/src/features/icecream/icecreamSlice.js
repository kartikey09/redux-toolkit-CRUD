import {ordered as cakeOrdered} from '../cake/cakeSlice';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
//   extraReducers: {
//     ["cake/ordered"]: (state) => {
//       state.numOfIcecreams--;
//     },
//   },
  extraReducers: (builder) =>{
    builder.addCase(cakeOrdered, (state, action)=>{
        state.numOfIcecreams--;
    })
  }

});

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions;

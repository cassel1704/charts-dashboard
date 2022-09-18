import { ECPContract } from "../contracts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ECPContract = [];

const ecpSlice = createSlice({
  name: "ecp",
  initialState,
  reducers: {
    import: (state, action: PayloadAction<ECPContract>) => {
      return action.payload;
    },
  },
});

export const reducer = ecpSlice.reducer;
export const actions = ecpSlice.actions;

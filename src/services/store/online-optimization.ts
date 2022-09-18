import { OnlineOptimizationContract } from "../contracts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: OnlineOptimizationContract[] = [];

const onlineOptimizationSlice = createSlice({
  name: "online-optimization",
  initialState,
  reducers: {
    import: (state, action: PayloadAction<OnlineOptimizationContract[]>) => {
      return action.payload;
    },
  },
});

export const reducer = onlineOptimizationSlice.reducer;
export const actions = onlineOptimizationSlice.actions;

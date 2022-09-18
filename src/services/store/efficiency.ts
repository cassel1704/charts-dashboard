import { EfficiencyContract } from "../contracts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Record<string, EfficiencyContract> = {
  efficiency1: { percent: null },
  efficiency2: { percent: null },
};

const efficiencySlice = createSlice({
  name: "efficiency",
  initialState,
  reducers: {
    import1: (state, action: PayloadAction<EfficiencyContract>) => {
      state.efficiency1 = action.payload;
    },
    import2: (state, action: PayloadAction<EfficiencyContract>) => {
      state.efficiency2 = action.payload;
    },
  },
});

export const reducer = efficiencySlice.reducer;
export const actions = efficiencySlice.actions;

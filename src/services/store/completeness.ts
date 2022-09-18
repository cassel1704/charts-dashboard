import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompletenessContract } from "../contracts";

const initialState: CompletenessContract[] = [];

const completenessSlice = createSlice({
  name: "completeness",
  initialState,
  reducers: {
    import: (state, action: PayloadAction<CompletenessContract[]>) => {
      return action.payload;
    },
  },
});

export const reducer = completenessSlice.reducer;
export const actions = completenessSlice.actions;

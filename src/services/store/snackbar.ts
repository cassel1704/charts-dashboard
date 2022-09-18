import { SnackbarContract } from "../contracts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SnackbarContract[] = [];

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ msg: string; status: SnackbarContract["status"] }>
    ) => {
      state.push({
        key: Math.random().toString(36), // refactor in the future (remove side effect from here)
        message: action.payload.msg,
        progressMode: "line",
        status: action.payload.status,
      });
    },
    remove: (state, action: PayloadAction<SnackbarContract>) => {
      return state.filter(
        (itemInState) => itemInState.key !== action.payload.key
      );
    },
  },
});

export const reducer = snackbarSlice.reducer;
export const actions = snackbarSlice.actions;

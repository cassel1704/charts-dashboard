import { RecommendationContract } from "../contracts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RecommendationContract[] = [];

const recommendationSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {
    generate: (state) => {
      state.push({
        id: Math.random().toString(36), // refactor in the future (remove side effect from here)
        msg: "Изменить верхнего ограничения по контроллера СУУТП Регулятор колонны атмосферной перегонки нефти К-2 (XC002) параметр MV1 FIRC0962 до 26,5 м3/ч​",
      });
    },
  },
});

export const reducer = recommendationSlice.reducer;
export const actions = recommendationSlice.actions;

import { reducer as snackbarReducer } from "./snackbar";
import { reducer as completenessReducer } from "./completeness";
import { reducer as onlineOptimizationReducer } from "./online-optimization";
import { reducer as ecpReducer } from "./ecp";
import { reducer as efficiencyReducer } from "./efficiency";
import { reducer as recommendationsReducer } from "./recommendations";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    completeness: completenessReducer,
    onlineOptimization: onlineOptimizationReducer,
    ecp: ecpReducer,
    efficiency: efficiencyReducer,
    recommendations: recommendationsReducer,
  },
});

export type RootStore = typeof store;
export type RootState = ReturnType<RootStore["getState"]>;

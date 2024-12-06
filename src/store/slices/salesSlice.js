import { createSlice } from "@reduxjs/toolkit";
import { initialSalesState } from "../initialStates/salesInitialState";

const salesSlice = createSlice({
    name: "sales",
    initialState: initialSalesState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
            console.log("status", state.status);
        },
        setSales: (state, action) => {
            state.sales = action.payload;
            console.log("sales", state.sales);
        }
    },
});

export const { setStatus, setSales } = salesSlice.actions;

export default salesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { initialStatusState } from "../initialStates/ProjectStatus";

const projectSlice = createSlice({
    name: "project",
    initialState: initialStatusState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
            console.log("status", state.status);
        },
        setProjects: (state, action) => {
            state.projects = action.payload;
            console.log("projects", state.projects);
        }
    },
});

export const { setStatus, setProjects } = projectSlice.actions;

export default projectSlice.reducer;
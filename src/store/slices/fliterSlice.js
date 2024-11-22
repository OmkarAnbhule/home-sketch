import { createSlice } from "@reduxjs/toolkit";
import { initialFilterState } from "../initialStates/filterInitialState";

const filterSlice = createSlice({
    name: "filters",
    initialState: initialFilterState,
    reducers: {
        setFilters(state, action) {
            state.filters = action.payload;
            state.filteredData = state.data.filter((item) => {
                const { range, width, depth, bedrooms, living, storeys, garage, driveway } = state.filters;

                // Range filter
                if (range && (item.area < range[0] || item.area > range[1])) return false;

                // Width filter
                if (width && item.width.toString() !== width) return false;

                // // Depth filter
                if (depth && item.depth.toString() !== depth) return false;

                // // Bedrooms filter
                if (bedrooms.length > 0) {
                    if (bedrooms.includes('6+') && item.bedrooms < 6) return false; // Handle 6+ condition
                    if (!bedrooms.includes(item.bedrooms.toString())) return false; // Regular bedroom filter
                }
                // // Living filter
                if (living && item.living.toString() !== living) return false;

                // // Storeys filter
                if (storeys === 'single' && item.storeys > 1) return false;
                if (storeys === 'double' && item.storeys <= 1) return false;

                // // Garage filter
                if (garage === 'single' && item.garage > 1) return false;
                if (garage === 'double' && item.garage <= 1) return false;

                // // Driveway filter
                if (driveway && driveway !== 'not-sure' && driveway !== item.driveway) return false;

                return true;
            });
        },
        setData(state, action) {
            state.data = action.payload;

            // Reapply filters to new data
            state.filteredData = state.data.filter((item) => {
                const { range, width, depth, bedrooms, living, storeys, garage, driveway } = state.filters;

                // Range filter
                if (range && (item.area < range[0] || item.area > range[1])) return false;

                // Width filter
                if (width && item.width.toString() !== width) return false;

                // // Depth filter
                if (depth && item.depth.toString() !== depth) return false;

                // // Bedrooms filter
                if (bedrooms.length > 0) {
                    if (bedrooms.includes('6+') && item.bedrooms < 6) return false; // Handle 6+ condition
                    if (!bedrooms.includes(item.bedrooms.toString())) return false; // Regular bedroom filter
                }
                // // Living filter
                if (living && item.living.toString() !== living) return false;

                // // Storeys filter
                if (storeys === 'single' && item.storeys > 1) return false;
                if (storeys === 'double' && item.storeys <= 1) return false;

                // // Garage filter
                if (garage === 'single' && item.garage > 1) return false;
                if (garage === 'double' && item.garage <= 1) return false;

                // // Driveway filter
                if (driveway && driveway !== 'not-sure' && driveway !== item.driveway) return false;

                return true;
            });
        }
    },
});

export const { setFilters, setData } = filterSlice.actions;
export default filterSlice.reducer;

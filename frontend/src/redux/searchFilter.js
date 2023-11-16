import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchFilter",
    initialState: {
        content: ""
    },

    reducers: {
        updateFilter:(state, action)=>{
            state.content = action.payload;
        }
        },
    },
);

export const {updateFilter} = searchSlice.actions;
export default searchSlice.reducer;
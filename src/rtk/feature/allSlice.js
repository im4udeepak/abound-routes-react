import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gallery: null,
    expertise: null,
    experiences: null,
    subcontinents: null,
};

const allSlice = createSlice({
    name: "all",
    initialState,
    reducers: {
        setGallery: (state, action) => {
            state.gallery = action.payload;
        },
        setExpertise: (state, action) => {
            state.expertise = action.payload;
        },
        setExperiences: (state, action) => {
            state.experiences = action.payload;
        },
        setSubContinents: (state, action) => {
            state.subcontinents = action.payload;
        },
        clearAll: (state, action) => {
            state.gallery = null;
            state.expertise = null;
            state.allExpertise = null;
            state.experiences = null;
            state.subcontinents = null;
        },
    }
});

export const {
    setGallery,
    setExpertise,
    setExperiences,
    setSubContinents,
    clearAll,
} = allSlice.actions;

export default allSlice.reducer;

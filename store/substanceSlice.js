import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    substances: [],
    substance: {},
};

export const substanceSlice = createSlice({
    name: 'substance',
    initialState,
    reducers: {
        setSubstances: (state, { payload }) => {
            state.substances = payload;
            //console.log(payload)
        },
        setSubstance: (state, { payload }) => {
            state.substance = payload;
        },
        resetSubstance: (state) => {
            state.substance= {};
        },
    },
});

export const substanceReducer = substanceSlice.reducer;

export const { setSubstances, setSubstance, resetSubstance } = substanceSlice.actions;

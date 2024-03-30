﻿import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    money: 3000,
    bet: 123,
    insuranceMoney: 0
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeMoney: (state, action) => {
            state.money = action.payload;
        },
        changeBet: (state, action) => {
            state.bet = action.payload;
        },
        setInsuranceMoney: (state, action) => {
            state.insuranceMoney = action.payload;
        }
    }
});

export const { 
    changeMoney,
    changeBet,
    setInsuranceMoney
} = profileSlice.actions;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: []
}

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addToFavourites: (state, action) => {
        state.favourites = [...state.favourites, action.payload];
    },
    removeFromFavourites: (state, action) => {
        state.favourites = state.favourites.filter((favoriteKey) => {
            return favoriteKey !== action.payload;
        });    
    },
  },
});

export default favouritesSlice;

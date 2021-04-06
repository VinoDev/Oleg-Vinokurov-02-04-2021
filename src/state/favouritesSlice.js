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
        state.favourites = state.favourites.filter((favorite) => {
            return favorite.key !== action.payload;
        });    
    },
  },
});

export default favouritesSlice;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
    hero: null,
  },
  reducers: {
    getHeroes: (state, action) => {
      state.heroes = action.payload;
    },
    getHero: (state, action) => {
      state.hero = action.payload;
    },
  },
});

export const { getHeroes, getHero } = heroesSlice.actions;

export const fetchHeroes = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://akabab.github.io/superhero-api/api/all.json"
    );

    const data = await res.data;

    dispatch(getHeroes(data));
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchHero = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://akabab.github.io/superhero-api/api/id/${id}.json`
    );

    const data = await res.data;
    dispatch(getHero(data));
  } catch (err) {
    console.error(err.message);
  }
};

// Selectors
export const selectHeroes = (state) => state.heroes.heroes;

export const selectHero = (state) => state.heroes.hero;

export default heroesSlice.reducer;

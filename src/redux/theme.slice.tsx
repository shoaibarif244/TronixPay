import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  darkTheme: boolean;
};

const initialState = {
  darkTheme: false,
} as ThemeState;

type ThemeChangePayload = {
  payload: {
    darkTheme: boolean;
  };
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state, action: ThemeChangePayload) => ({
      darkTheme: action.payload?.darkTheme,
    }),
    // setDarkTheme: (state, action: ThemeChangePayload) => {
    //   state.darkTheme = action.payload?.darkTheme;
    // },
  },
});

export const { setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  user: null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
  error: null,
} as AuthState;

type AuthChangePayload = {
  payload: {
    isLoading?: boolean;
    user?: null;
    isAuthenticated?: boolean;
    error?: string | null;
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthState: (state, action: AuthChangePayload) => {
      if (action?.payload?.isLoading != undefined)
        state.isLoading = action?.payload?.isLoading;
      if (action?.payload?.user != undefined)
        state.user = action?.payload?.user;
      if (action?.payload?.isAuthenticated != undefined)
        state.isAuthenticated = action?.payload?.isAuthenticated;
      if (action?.payload?.error != undefined)
        state.error = action?.payload?.error;
    },
  },
});

export const { setAuthState } = userSlice.actions;

export default userSlice.reducer;

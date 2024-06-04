import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    group: null,
    institute: null,
    role: null,
    privilige: null,
    lastSeen: null,
    accessToken: null,
    photoPath: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setToken: (state, action) => {
      state.user.accessToken = action.payload;
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
    },
  },
});
export const { actions, reducer } = userSlice;
export const getCurrentUser = (state) => state.user.user;

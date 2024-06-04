import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../user/userSlice";
import { Api } from "../API/httpAPI";
export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([Api.middleware]),
  devTools: true,
});

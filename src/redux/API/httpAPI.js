import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { actions } from "../user/userSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001",
  credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().user.user.accessToken;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
      headers.set("Content-type", "application/json");
    }
    return headers;
  },
});
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 401) {
    console.log("sending refresh token...");
    const refreshResult = await baseQuery(
      {
        url: "/access_token",
        method: "GET",
        headers: { "Content-Type": "text/plain" },
        responseHandler: "text",
      },
      api,
      extraOptions
    );
    console.log("refresh result :", refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().user.user;
      console.log(user);
      api.dispatch(actions.setToken({ accessToken: refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("Errors");
    }
  }
  return result;
};
export const Api = createApi({
  baseQuery: baseQueryWithReAuth,
  reducerPath: "userApi",
  endpoints: (builder) => ({}),
});

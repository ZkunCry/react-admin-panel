import { Api } from "../API/httpAPI";
export const userApiSlice = Api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getUsers: builder.query({
      query: (count) => ({
        url: `/user?offset=${count}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyGetUsersQuery } = userApiSlice;

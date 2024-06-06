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
    changeUser: builder.mutation({
      query: (credentials) => ({
        url: `/admin/user/change?userId=${credentials.data.id}`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyGetUsersQuery, useChangeUserMutation } =
  userApiSlice;

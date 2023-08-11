
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.hiring.masterkey.tech/api/v1",
    }),
    endpoints: (builder) => ({}),
});

export default apiSlice;
import apiSlice from "../apiSlice";


const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHotDeals: builder.query({
            query: (productString) => ({

                url: `/${productString}`,
            }),
        }),
    }),
});

export const { useGetHotDealsQuery } = jobApi;
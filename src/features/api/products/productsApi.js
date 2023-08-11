import apiSlice from "../apiSlice";


const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHotDeals: builder.query({
            query: (productString) => ({
                url: `/products?product_type=${productString}`,
            }),
            providesTags: ['Jobs'],
        }),
    }),
});

export const { useGetHotDealsQuery } = jobApi;
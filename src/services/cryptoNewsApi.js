import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '5e7a4e9e26msh55ff0e57b92e624p11f876jsn8a183ab1f067',
    'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
};

const baseUrl = 'https://newsnow.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeader})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
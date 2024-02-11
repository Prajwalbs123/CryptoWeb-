import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '',
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

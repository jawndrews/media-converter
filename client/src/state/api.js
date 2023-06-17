import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeMP3Api = createApi({
  reducerPath: "youtubeMP3Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-mp3-download1.p.rapidapi.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("X-RapidAPI-Key", "API-KET-YT-MP3");
      headers.set("X-RapidAPI-Host", "youtube-mp3-download1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getYoutubeMP3: builder.query({
      query: (id) => ({
        url: "dl",
        params: {
          id,
        },
      }),
    }),
  }),
});

export const { useGetYoutubeMP3Query } = youtubeMP3Api;

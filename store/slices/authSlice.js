import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
	reducerPath: 'authSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),

	endpoints: (builder) => ({
		getPhotos: builder.query({
			query: () => '/photos',
		}),
	}),
});

export const { useGetPhotosQuery } = authSlice;

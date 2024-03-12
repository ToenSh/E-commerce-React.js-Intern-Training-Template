import { TCategory } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: builder => ({
        getCategories: builder.query<TCategory[], void>({
            query: () => '/categories'
        }),
        getOneCategory: builder.query<TCategory, string | void>({
            query: (categoryID) => `/categories/${categoryID}`
        })
    })
})

export const { useGetCategoriesQuery, useGetOneCategoryQuery } = apiSlice


import { apiSlice } from "@/api/apiSlice";
import { TCategory } from "../types";

export const dashboardApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategories: builder.query<TCategory[], void>({
            query: () => '/categories'
        }),
        getOneCategory: builder.query<TCategory, string | void>({
            query: (categoryID) => `/categories/${categoryID}`
        })
    })
})

export const { useGetCategoriesQuery, useGetOneCategoryQuery } = dashboardApiSlice


import { apiSlice } from "@/api/apiSlice";
import { TransactionType } from "../types";

export const transactionsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactions: builder.query<TransactionType[], string>({
            query: (bankAccountId) => `/transactions/?bankAccountId=${bankAccountId}`
        }),
    })
})

export const { useGetTransactionsQuery } = transactionsApiSlice


import { apiSlice } from "@/api/apiSlice";
import { TBankAccount } from "../types";

export const bankAccountsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBankAccounts: builder.query<TBankAccount[], string>({
            query: (userId) => `/bankAccounts/?userId=${userId}`,
            providesTags: ['bankAccounts']
        }),
        addBankAccount: builder.mutation({
            query: (bankAccount: TBankAccount) => ({
                url: '/bankAccounts',
                method: 'POST',
                body: bankAccount
            })
        })
    })
})

export const { useGetBankAccountsQuery, useAddBankAccountMutation } = bankAccountsApiSlice;


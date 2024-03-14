import { apiSlice } from '@/api/apiSlice';
import { TBankAccount } from '../types';

export const bankAccountsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBankAccounts: builder.query<TBankAccount[], string | undefined>({
      query: (userId) => `/bankAccounts/?userId=${userId}`,
      providesTags: ['bankAccounts'],
    }),
    addBankAccount: builder.mutation({
      query: (bankAccount: TBankAccount) => ({
        url: '/bankAccounts',
        method: 'POST',
        body: bankAccount,
      }),
      invalidatesTags: ['bankAccounts'],
    }),
    setActiveAccount: builder.mutation({
      query: (bankAccId: number) => ({
        url: `/bankAccounts/${bankAccId}`,
        method: 'PUT',
      }),
    }),
    deleteBankAccount: builder.mutation({
      query: (bankAccId: number) => ({
        url: `/bankAccounts/${bankAccId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['bankAccounts'],
    }),
  }),
});

export const {
  useGetBankAccountsQuery,
  useAddBankAccountMutation,
  useDeleteBankAccountMutation,
} = bankAccountsApiSlice;

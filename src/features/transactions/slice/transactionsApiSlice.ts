import { apiSlice } from '@/api/apiSlice';
import { TransactionType } from '../types';

export const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionType[], string | undefined>({
      query: (bankAccountId) => `/transactions/?bankAccountId=${bankAccountId}`,
      providesTags: ['transactions'],
    }),
    createTransaction: builder.mutation({
      query: (transaction: TransactionType) => ({
        url: '/transactions',
        method: 'POST',
        body: transaction,
      }),
      invalidatesTags: ['bankAccounts', 'transactions'],
    }),
  }),
});

export const { useGetTransactionsQuery, useCreateTransactionMutation } =
  transactionsApiSlice;

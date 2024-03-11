import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
    id: string;
    description: string;
    amount: number;
}

interface TransactionsState {
    transactions: Transaction[];
}

const initialState: TransactionsState = {
    transactions: [],
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload);
        },
        editTransaction: (state, action: PayloadAction<Transaction>) => {
            const index = state.transactions.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) {
                state.transactions[index] = action.payload;
            }
        },
        deleteTransaction: (state, action: PayloadAction<string>) => {
            state.transactions = state.transactions.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTransaction, editTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;

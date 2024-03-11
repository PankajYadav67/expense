import { configureStore } from '@reduxjs/toolkit';
import TransactionsSlice from './Transaction/TransactionsSlice';

const store = configureStore({
    reducer: {
        transactions: TransactionsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

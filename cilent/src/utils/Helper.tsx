export type Transaction = {
    type: 'income' | 'spent';
    amount: number;
};

export const calculateTotalAmount = (transactions: Transaction[]): number => {
    return transactions.reduce((total, transaction) => {
        return transaction.type === 'income'
            ? total + transaction.amount
            : total - transaction.amount;
    }, 0);
};

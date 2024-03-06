import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Transaction, calculateTotalAmount } from '../../utils/Helper';

interface GraphProps {
    transactions: Transaction[];
}

const MainGraph: React.FC<GraphProps> = ({ transactions }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<'doughnut'> | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');

        if (!ctx) return;

        // Destroy the existing chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const totalIncome = calculateTotalAmount(
            transactions.filter((transaction) => transaction.type === 'income')
        );

        const totalSpent = calculateTotalAmount(
            transactions.filter((transaction) => transaction.type === 'spent')
        );

        const config: ChartConfiguration<'doughnut', number[], string> = {
            type: 'doughnut',
            data: {
                labels: ['Income', 'Spent'],
                datasets: [
                    {
                        data: [totalIncome, totalSpent],
                        backgroundColor: ['rgba(76, 210, 100, 0.5)', 'rgba(255, 59, 48, 0.5)'],
                        borderColor: ['rgba(76, 210, 100, 1)', 'rgba(255, 59, 48, 1)'],
                        borderWidth: 1,
                    },
                ],
            },
        };

        chartInstance.current = new Chart(ctx, config);

        // Cleanup function to destroy the chart when the component is unmounted
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [transactions]);

    return (
        <div className="bg-white rounded-md p-4">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default MainGraph;
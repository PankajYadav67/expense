import React, { useState } from 'react';

const Date: React.FC = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    };

    return (
        <div className="flex items-center justify-end mt-8 space-x-4">
            <label className="mt-4 mb-2 text-lg font-bold" htmlFor="startDate">
                Start Date:
            </label>
            <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <label className="mt-4 mb-2 text-lg font-bold" htmlFor="endDate">
                End Date:
            </label>
            <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 mt-2"
            />
        </div>
    );
};

export default Date;

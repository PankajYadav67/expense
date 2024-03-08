import React, { useEffect } from 'react';
import axios from 'axios';
import URL from '../../utils/Constant';

const Protected: React.FC = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Axios will automatically include the token in the headers due to the interceptor
                const response = await axios.get(`${URL}/protected`);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching protected data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {/* Your protected component content */}
        </>
    );
};

export default Protected;

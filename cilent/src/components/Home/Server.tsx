import axios from 'axios'
import React, { useEffect } from 'react'
import URL from '../../utils/Constant'

const Server: React.FC = () => {
    const res = "Starting The Server By Making Api REQ.";
    useEffect(() => {
        axios.post(`${URL}/post`, {
            res
        })
    }, [])
    return (
        <>
        </>
    )
}

export default Server;
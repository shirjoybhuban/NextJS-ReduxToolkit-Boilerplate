import React from 'react';
import { useGetPhotosQuery } from 'store/slices/authSlice';

const login = () => {
    const {data} = useGetPhotosQuery()
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};

export default login;
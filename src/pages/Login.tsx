import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

export interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
    return (
        <div>
            <p>this is the Login page</p>
        </div>
    );
};

export default LoginPage;

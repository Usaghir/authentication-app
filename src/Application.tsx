import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    );
};

export default Application;

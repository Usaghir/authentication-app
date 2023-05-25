import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/config';
import AuthRoute from './components/AuthRoute';
import LoginPage from './pages/Login';

 initializeApp(firebaseConfig);

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthRoute><HomePage /></AuthRoute>}></Route>
                <Route path="login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;

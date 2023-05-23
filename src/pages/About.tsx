import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

export interface AboutPageProps {}

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
    return (
        <div>
            <p>this is the about page page</p>
        </div>
    );
};

export default AboutPage;

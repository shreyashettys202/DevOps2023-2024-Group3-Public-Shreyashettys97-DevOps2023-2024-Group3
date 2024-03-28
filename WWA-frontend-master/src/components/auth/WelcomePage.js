// /comoponent/auth/WelcomePage.js
/**
 * @module WelcomePage
 * @description This javascript file is used to show the components of WelcomePage and shows functinality of WelcomePage, used in WWA app
 * @prop WelcomePage
 * @param {Object} params
 */
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage';

const WelcomePage = () => {
    const [activeTemplate, setActiveTemplate] = useState('login');


    switch (activeTemplate) {
        case 'login':
            return <LoginPage setActiveTemplate={setActiveTemplate} />;
        case 'signup':
            return <SignupPage setActiveTemplate={setActiveTemplate} />;
        case 'forgotPassword':
            return <ForgotPasswordPage setActiveTemplate={setActiveTemplate} />;
        default:
            return <LoginPage setActiveTemplate={setActiveTemplate} />;
    }

}

export default WelcomePage;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from'react';
import StartPage from './StartPage';
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import TestPage from './TestPage';
import { useStateContext } from '../contexts/ContextProvider';
import config_data from '../assets/data/config_data.json'

function RoutePage() {
    const { userType } = useStateContext();
    useEffect(() => {
        window.wzp = {
            route: function (path) {
                window.location.href = 'http://localhost:3000/' + path;
            },
            click: function (selector) {
                document.querySelector(selector).click();
            },
            input: function (selector, text) {
                document.querySelector(selector).value = text;
            },
            print: () => {
                console.log(userType);
            }
        };
    }, [userType]);

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={(<StartPage />)} />
            <Route path="/login" element={(<LoginPage/>)} />
            <Route path="/form" element={(<FormPage />)} />
            <Route path="/test" element={(<TestPage />)} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutePage;


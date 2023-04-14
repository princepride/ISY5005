import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from'react';
import StartPage from './StartPage';
import LoginPage from './LoginPage';
import TestPage from './TestPage';
import CusDashboardPage from './CusDashboardPage';
import EntDashboardPage from './EntDashboardPage';
import CusHistoryPage from './CusHistoryPage';
import { useStateContext } from '../contexts/ContextProvider';
import config_data from '../assets/data/config_data.json'

function RoutePage() {
    const { userType, isLogin } = useStateContext();
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
            <Route path="/cus-dashboard/*" element={(<CusDashboardPage />)} />
            {/*{isLogin && <Route path="/form" element={(<FormPage />)} />}*/}
            {/*{isLogin && <Route path="/cus-dashboard" element={(<CusDashboardPage />)} />}*/}
            {isLogin && <Route path="/ent-dashboard/*" element={(<EntDashboardPage />)} />}
            <Route path="/test" element={(<TestPage />)} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutePage;


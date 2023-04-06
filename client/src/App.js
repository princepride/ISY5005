//import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { useEffect } from'react';
//import StartPage from './pages/StartPage';
//import LoginPage from './pages/LoginPage';
//import FormPage from './pages/FormPage';
//import TestPage from './pages/TestPage';
//import { ContextProvider, useStateContext } from './contexts/ContextProvider';
//import config_data from './assets/data/config_data.json'

//function App() {
//  useEffect(() => {
//    window.wzp = {
//      route: function (path) {
//        window.location.href = 'http://localhost:3000/' + path;
//      },
//      click: function (selector) {
//        document.querySelector(selector).click();
//      },
//      input: function (selector, text) {
//        document.querySelector(selector).value = text;
//      },
//      print: () => {

//      }
//    };
//  }, []);

//  return (
//    <div className="App">
//      <ContextProvider>
//          <BrowserRouter>
//            <Routes>
//              <Route path="/" element={(<StartPage />)} />
//              <Route path="/login" element={(<LoginPage/>)} />
//              <Route path="/form" element={(<FormPage />)} />
//              <Route path="/test" element={(<TestPage />)} />
//            </Routes>
//          </BrowserRouter>
//      </ContextProvider>
//    </div>
//  );
//}

//export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from'react';
import { ContextProvider } from './contexts/ContextProvider';
import RoutePage from './pages/RoutePage';

function App() {

  return (
    <div className="App">
      <ContextProvider>
        <RoutePage />
      </ContextProvider>
    </div>
  );
}

export default App;
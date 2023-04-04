import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from'react';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';

function App() {

  useEffect(() => {
    // 将wzp对象挂载到全局对象上
    window.wzp = {
      route: function (path) {
        window.location.href = 'http://localhost:3000/' + path;
      },
      click: function (selector) {
        document.querySelector(selector).click();
      },
      input: function (selector, text) {
        document.querySelector(selector).value = text;
      }
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/StartPage" element={(<StartPage />)} />
          <Route path="/LoginPage" element={(<LoginPage />)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

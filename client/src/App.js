import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';

function App() {
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

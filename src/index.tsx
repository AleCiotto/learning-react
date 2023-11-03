import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './routes/error.route';
import Home from './routes/home.route';
import LogIn from './routes/login.route';
import Brands from './routes/brands.route';
import Catalogs from './routes/catalogs.route';
import ProtectedRoute from './routes/protected.route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />

          <Route element={<ProtectedRoute isAuth target="/login" />}>
            <Route path="/brands" element={<Brands />} />
            <Route path="/catalogs" element={<Catalogs />} />
          </Route>

          <Route element={<ProtectedRoute target="/" />}>
            <Route path="/login" element={<LogIn />} />
          </Route>

        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Done from './pages/Done'
import { apiSlice } from './Redux/api/apiSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/done' element={<Done />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>,
  // </React.StrictMode>
)

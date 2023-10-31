import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Show} from './pages/Show.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
  path: '/',
  element: <App />
  },
  {
    path: '/about',
    element: <h1>Ceci est une autre "page"</h1>
  },
  {
    path: '/show/:id',
    element: <Show />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

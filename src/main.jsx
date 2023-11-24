import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import App from './App.jsx'

import './assets/styles/main.scss'
import './assets/styles/components/header.scss'
import './assets/styles/components/footer.scss'
import './assets/styles/routes/login.scss'
import './assets/styles/routes/home.scss'
import './assets/styles/routes/error.scss'


const router = createBrowserRouter([

  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      {path: '/', element: <Home />}
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

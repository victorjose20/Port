import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './paginas/Error/Error.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <Error/>,
    children:[
     
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import Home from './routes/Home/Home.jsx'
import { createRoot } from 'react-dom/client'
import NewPost from './routes/NewPost/NewPost.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// router object
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewPost />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

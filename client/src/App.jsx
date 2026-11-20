import { useState } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/home/home.jsx'

// Client side routing for show which page to display for the url
const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {path: '/', element: <Home />}
      ],
    }
  ])

function App() {
  return <RouterProvider router={router} />
}

export default App

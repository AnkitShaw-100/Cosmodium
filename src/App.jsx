import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout.jsx'
import LandingPage from './pages/landing.jsx'
import DashboardPage from './pages/dashboard.jsx'
import AuthPage from './pages/auth.jsx'
import LinkPage from './pages/link.jsx'
import RedirectPage from './pages/redirect.jsx'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'auth', element: <AuthPage /> },
      { path: 'link/:id', element: <LinkPage /> },
      { path: ':id', element: <RedirectPage /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

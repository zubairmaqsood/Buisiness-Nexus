
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import DashboardLayout from './layout/DashboardLayout'
import InvestorDashboard from './pages/dashboard/InvestorDashboard'
import EntrepreneurDashboard from './pages/dashboard/EntrepreneurDashboard'
import InvestorProfile from './pages/profile/InvestorProfile'
import EntrepreneurProfile from './pages/profile/EntrepreneurProfile'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navigate to='/dashboard'/> 
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '/dashboard/investor',
          element: <InvestorDashboard />
        },
        {
          path: '/dashboard/entrepreneur',
          element: <EntrepreneurDashboard />
        }
      ]
    },
    {
      path: '/profile/investor/:id',
      element: <InvestorProfile />
    },
    {
      path: '/profile/entrepreneur/:id',
      element: <EntrepreneurProfile />
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


import './App.css'
import { createBrowserRouter, Navigate, redirect, RouterProvider } from 'react-router'
import DashboardLayout from './layout/DashboardLayout'
import InvestorDashboard from './pages/dashboard/InvestorDashboard'
import EntrepreneurDashboard from './pages/dashboard/EntrepreneurDashboard'
import InvestorProfile from './pages/profile/InvestorProfile'
import EntrepreneurProfile from './pages/profile/EntrepreneurProfile'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import InvestorRequest from './pages/request/InvestorRequest'
import EntrepreneurRequest from './pages/request/EntrepreneurRequest'

function App() {

  const logoutUser = () => {
    localStorage.removeItem("token")
    return redirect("/login")
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='/dashboard' />
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'investor',
          element: <InvestorDashboard />,
          children: [
            {
              path: 'profile/:id',
              element: <InvestorProfile />
            },
            {
              path:"request",
              element:<InvestorRequest/>
            }
          ]
        },
        {
          path: '/dashboard/entrepreneur',
          element: <EntrepreneurDashboard />,
          children: [
            {
              path: 'profile/:id',
              element: <EntrepreneurProfile />
            },
            {
              path:"request",
              element:<EntrepreneurRequest/>
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: "/logout",
      loader: logoutUser
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

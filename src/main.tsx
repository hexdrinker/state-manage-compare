import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JotaiPage from './pages/JotaiPage.tsx'
import ReduxPage from './pages/ReduxPage.tsx'
import MobxPage from './pages/MobxPage.tsx'
import RecoilPage from './pages/RecoilPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/jotai',
    element: <JotaiPage />,
  },
  {
    path: '/redux',
    element: <ReduxPage />,
  },
  {
    path: '/mobx',
    element: <MobxPage />,
  },
  {
    path: '/recoil',
    element: <RecoilPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

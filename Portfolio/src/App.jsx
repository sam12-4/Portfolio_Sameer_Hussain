import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Contact, Projects} from  "./pages"

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element : <><Navbar/> <Home /></>
  },
  {
    path: "/about",
    element : <><Navbar /><About /></>
  },
  {
    path: "/projects",
    element : <><Navbar /><Projects /></>
  },
  {
    path: "/contact",
    element : <><Navbar /><Contact /></>
  }
])
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App

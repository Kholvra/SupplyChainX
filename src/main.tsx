import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createRouter } from '@tanstack/react-router'
import {routeTree} from "./routeTree.gen"
import './index.css'

const route = createRouter({routeTree})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)

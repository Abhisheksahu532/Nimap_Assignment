import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {RouterProvider } from 'react-router-dom'
import './index.css'
import { appRouter } from './utils/routes.jsx'
import store from './utils/redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)

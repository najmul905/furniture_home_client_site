import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router.tsx';
import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/store.ts';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
     <div className='font-baseFont' >
     <RouterProvider  router={router} />
     </div>
     </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/src/store'
import FirbaseProvider from './context/FirebaseContext'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <FirbaseProvider>

    <Provider store={store}>
    <ToastContainer />
    <App />
    </Provider>
    </FirbaseProvider>
    </BrowserRouter>

)

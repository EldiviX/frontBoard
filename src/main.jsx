import React from 'react'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/main.css'

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </>
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter  } from "react-router-dom";

import { EMSpyReactForm } from './EMSpyReactForm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <EMSpyReactForm />
    </React.StrictMode>
  </BrowserRouter>
)



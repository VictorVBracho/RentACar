import React from 'react'
import ReactDOM from 'react-dom/client'
import Formulario from '../src/components/Formulario'
import TopBar from '../src/components/TopBar'
import './index.css'
import ListaForm from '../src/components/ListaFormulario'
// import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TopBar />
    <Formulario />

  </React.StrictMode>,
)

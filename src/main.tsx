import { render } from 'preact'
import { Router } from "preact-router"
import App from "./app"
import InstalarPage from './guia/instalar'
import TiposPrimitivos from './guia/tipos-primitivos'

render((
    <Router>
        <App path="/" />
        <InstalarPage path="/guia/instalar" />
        <TiposPrimitivos path="/guia/tipos-primitivos" />
    </Router>
), document.getElementById('app')!)

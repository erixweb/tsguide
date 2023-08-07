import { render } from 'preact'
import { Router } from "preact-router"
import App from "./app"
import InstalarPage from './guia/instalar'

render((
    <Router>
        <App path="/" />
        <InstalarPage path="/guia/instalar" />
    </Router>
), document.getElementById('app')!)

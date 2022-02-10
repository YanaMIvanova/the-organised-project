import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import * as serviceWorker from './serviceWorker'

const DOMAIN = 'organised-project.eu.auth0.com'
const CLIENT_ID = 'F6eBlvCl5ACGnssGO2cuwXUFlFkplkDd'

ReactDOM.render(
    <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} redirectUri={window.location.origin}>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.scss'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import Login from '../Login/Login'
import { useToken } from './hooks'

function App() {
    const { token, setToken } = useToken()
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0()

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (!isAuthenticated) {
        /* <Login setToken={setToken} /> */

        return <button onClick={() => loginWithRedirect()}>Log In</button>
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

import React, { useState } from 'react'
import { func } from 'prop-types'
import { loginUser } from './loginAPI'
import './Login.scss'

export default function Login({ setToken }: any) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password,
        })
        setToken(token)
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: func.isRequired,
}

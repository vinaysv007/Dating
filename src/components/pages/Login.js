import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login page</h2>
                <LoginForm />
            </div>
        )
    }
}
export default Login;
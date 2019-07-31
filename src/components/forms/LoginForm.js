import React, { Component } from 'react'
import TextField from '../common/TextField';
import {withRouter} from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e)=> {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.history.push('/landing');
    }

    render() {
        let { username } = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <TextField label = "UserName"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                    />
                    <button>Login</button>
                </form>
            </React.Fragment>
        )
    }
}
export default withRouter(LoginForm);
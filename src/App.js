import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Landing from './components/pages/Landing';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <React.Fragment>
                        <Route path="/" exact component={Login} />
                        <Route path="/landing" component={Landing} />
                    </React.Fragment>
                    <Route />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
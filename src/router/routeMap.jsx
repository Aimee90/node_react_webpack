import React from 'react'
import { Switch, IndexRoute, Route, BrowserRouter } from 'react-router-dom'
import App from '../container/App';
import Home from '../container/Home';
import Login from '../container/Login';
import NotFound from '../container/NotFound';


class RouteMap extends React.Component {
    render() {
        return (
            <BrowserRouter> 
                <Switch>
                <Route path='/' exact component={App}></Route> 
                <Route path='/login' component={Login}></Route> 
                <Route path='/welcome' component={Home}></Route>
                <Route path='/*' component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default RouteMap
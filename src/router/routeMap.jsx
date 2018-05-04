import React from 'react'
import { Switch, IndexRoute, Route, BrowserRouter } from 'react-router-dom'
import 'promise-polyfill';

import Loadable from 'react-loadable'
import Loading from '../container/Loading'

const App = Loadable({loader: () => import('../container/App'),loading:Loading})
const Home = Loadable({loader: () => import('../container/Home'),loading:Loading})
const Login = Loadable({loader: () => import('../container/Login'),loading:Loading})
const ResetPwd = Loadable({loader: () => import('../container/ResetPwd'),loading:Loading})
const NotFound = Loadable({loader: () => import('../container/NotFound'),loading:Loading})



class RouteMap extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route path='/' exact component={App}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/welcome' exact component={Home}></Route>
                <Route path='/forget/psw' exact component={ResetPwd}></Route>
                <Route path='/*' component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default RouteMap
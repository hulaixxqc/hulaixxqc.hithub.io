import * as React from 'react';
import { HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';

export default class Root extends React.Component{
    
    render(){
        return(
            <div>
                 <HashRouter>
                     <Switch>
                        <Route exact path="/" component={Home} />
                     </Switch>
                </HashRouter>
            </div>
        )
    }
}
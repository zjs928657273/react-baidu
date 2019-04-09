import React, { Component } from 'react'
import {  
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Prompt
 } from "react-router-dom"
import HeaderComponent from '../common/HeaderComponent';
// import ButtonComponenet from '../common/ButtonComponenet';
import FooterComponent from '../common/FooterComponent';
// import PickerDateComponent from "../common/PickerDateComponent";

export default class Routers extends Component {
    render () {
        const oddEvent = (match, location) => {
            if (!match) {
              return false;
            }
            const eventID = parseInt(match.params.eventID);
            return !isNaN(eventID) && eventID % 2 === 1;
        }
        const activeStyle = {
            fontWeight: 'bold',
            color: 'red'
        };
        return (
            <Router
                basename="/"
                // forceRefresh={bool}
                // getUserConfirmation={func}
                keyLength={6}
            >
                <Switch>
                    <Route path="/" exact component={HeaderComponent} >
                        <Link className="links" to={{
                            pathname: '/courses',
                            search: '?sort=name',
                            hash: '#the-hash',
                            state: {
                              fromDashboard: true
                            }
                        }} replace>click</Link>
                        <Prompt when={true} message="你确定要离开当前页面吗？" />
                        <NavLink exact to="/about" isActive={oddEvent} activeClassName="active" activeStyle={activeStyle}>About</NavLink>
                    </Route>
                    <Route path="/header/:canshu/:aa" component={HeaderComponent} />
                    <Route path="/footer" component={FooterComponent} /> 
                </Switch>  
            </Router>
        )
    }
}
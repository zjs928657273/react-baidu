import React, { Component } from 'react'
import {  
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Prompt
 } from "react-router-dom"
import HeaderComponent from '../components/HeaderComponent';
// import ButtonComponenet from '../components/ButtonComponenet';
import FooterComponent from '../components/FooterComponent';
// import PickerDateComponent from "../components/PickerDateComponent";

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
                keyLength={6}
            >
                <Switch>
                    <Route path="/" exact component={HeaderComponent} >
                        {/* <Link className="links" to={{
                            pathname: '/courses',
                            search: '?sort=name',
                            hash: '#the-hash',
                            state: {
                              fromDashboard: true
                            }
                        }} replace>click</Link>
                        <Prompt when={true} message="你确定要离开当前页面吗？" />
                        <NavLink exact to="/about" isActive={oddEvent} activeClassName="active" activeStyle={activeStyle}>About</NavLink> */}
                    </Route>
                    <Route path="/footer/:canshu/:aa" component={FooterComponent} /> 
                </Switch>  
            </Router>
        )
    }
}
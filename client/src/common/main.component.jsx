import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home.component'
import Classes from '../classes/class.component'
import Instances from '../instances/instance.component'
import Items from '../items/item.component'

// Configure all routes here
const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/classes' component={Classes}/>
        <Route exact path='/instances' component={Instances}/>
        <Route exact path='/items' component={Items}/>
    </Switch>
)

export default Main
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home.component'
import Classes from '../classes/class.component'
import Instances from '../instances/instance.component'
import Items from '../items/item.component'
import ClassDetails from '../classes/class-detail.component'
import Artifacts from '../artifacts/artifacts.component'
import EndlessTower from '../instances/endless-tower/endlesstower.component'

// Configure all routes here
const Main = () => (
    <Switch>
        <Route exact path='/' component={Classes} />
        <Route exact path='/classes' component={Classes} />
        <Route exact path='/classes/:classid' component={ClassDetails} />
        <Route exact path='/instances' component={Instances} />
        <Route exact path='/items' component={Items} />
        <Route exact path='/artifacts' component={Artifacts} />
        <Route exact path='/instances/endless-tower' component={EndlessTower} />
    </Switch>
)

export default Main
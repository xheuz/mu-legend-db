import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home.component'
import Classes from '../classes/class.component'
import Items from '../items/item.component'
import ClassDetails from '../classes/class-detail.component'
import Artifacts from '../items/artifacts/artifacts.component'
import EndlessTower from '../instances/endless-tower/endlesstower.component'
import { Base64 } from 'js-base64'

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';

const staticData = {
    1: {
        "image": "https://i.ytimg.com/vi/5Yyl07UmdDE/maxresdefault.jpg",
        "lore": "A class balanced offense and defense, based on its high health and defense. Specializes in powerful area attacks, and has the tactical role of protexting and boosting allies."
    },
    2: {
        "image": "https://i.ytimg.com/vi/fR-46pk_Gtc/maxresdefault.jpg",
        "lore": "Desvastates enemies on the frontline with a combination of quick charge skills and various crowd control skills. High mobility allows the Blader to function as a melee attacker and a frontline tank."
    },
    3: {
        "image": "https://i.ytimg.com/vi/8JHw9YYpCn4/maxresdefault.jpg",
        "lore": "Has relatively low health and defense, but can deliver the most powerful area attacks. You can build your War Mage in many ways such as a mage-type using a staff or an assassin-type wielding a sword."
    },
    4: {
        "image": "https://i.ytimg.com/vi/FJOmYNMhSj0/maxresdefault.jpg",
        "lore": "Powerful ranged damage dealer with high mobility. Capable of employing a wide range of strategies, utilizing not only bows but also traps, smoke shells, and the power of nature."
    },
    5: {
        "image": "http://image.webzen.kr/mu_legend/event/20170810_emphasizer/images/img_slider3.jpg",
        "lore": "Based on her ability to awaken a lost power to control objects and minds, a Spellbinder can freely manipulate weapons to make ranged attacks, inmobilize or mind-control a small group of targets."
    }
}

// Configure all routes here
const Main = () => (
    <Switch>
        <Route exact path='/' render={(props) => (
            <Classes {...props} api={url} staticData={staticData}/>
        )}/>
        <Route exact path='/classes' render={(props) => (
            <Classes {...props} api={url} staticData={staticData} />
        )} />
        <Route exact path='/classes/:classid' render={(props) => (
            <ClassDetails {...props} api={url} staticData={staticData} />
        )} />
        <Route exact path='/items' render={(props) => (
            <Items {...props} api={url} />
        )} />
        <Route exact path='/artifacts' render={(props) => (
            <Artifacts {...props} api={url} />
        )} />
        <Route exact path='/instances/endless-tower' render={(props) => (
            <EndlessTower {...props} api={url} />
        )} />
    </Switch>
)

export default Main
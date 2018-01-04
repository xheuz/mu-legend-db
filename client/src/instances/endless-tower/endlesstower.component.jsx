import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './endlesstower.css';

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';

class EndlessTower extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: []
        };
    }

    isBoss = (mobs) => {
        for(var key in mobs) {
            if(mobs[key].is_boss) {
                return mobs[key].is_boss;
            }
        }
        return false;
    }

    dataMerge (data) {
        let d = {};

        for(var pos in data) {
            let record = data[pos];
            if(record.stage_id in d) {
                if(!!record.auras_id) {
                    if(record.auras_id in d[record.stage_id].auras) {
                        let times = d[record.stage_id].auras[record.aura.id]['times'];
                        d[record.stage_id].auras[record.aura.id]['times'] = times + 1;
                    } else {
                        d[record.stage_id].auras[record.aura.id] = {name: record.aura.name, times: 1};
                    }
                }
                if(!!record.mobs_id) {
                    if(record.mobs_id in d[record.stage_id].mobs) {
                        let times = d[record.stage_id].mobs[record.mob.id]['times'];
                        d[record.stage_id].mobs[record.mob.id]['times'] = times + 1;
                    } else {
                        d[record.stage_id].mobs[record.mob.id] = record.mob;
                        d[record.stage_id].mobs[record.mob.id]['times'] = 1;
                        delete d[record.stage_id].mobs[record.mob.id]['id'];
                    }
                }
            } else {
                d[record.stage_id] = record.stage;
                d[record.stage_id]['auras'] = {};
                d[record.stage_id]['mobs'] = {};

                if(!!record.auras_id) {
                    d[record.stage_id].auras[record.aura.id] = {name: record.aura.name, times: 1};
                }
                if(!!record.mobs_id) {
                    d[record.stage_id].mobs[record.mob.id] = record.mob;
                    d[record.stage_id].mobs[record.mob.id]['times'] = 1;
                    delete d[record.stage_id].mobs[record.mob.id]['id'];
                }
            }
        }

        let stages = [];
        
        Object.keys(d).map((stage) => {
            stages.push(d[stage]);
        });

        this.setState({stages: stages});
    }

    componentWillMount() {
        this.EndlessTowerStages();
    }

    EndlessTowerStages() {
        fetch(url + '/endless')
        .then( (results) => results.json())
        .then(results => {
            this.dataMerge(results.data);
        });
    }

    render() {
        return (
            <StageList stages={this.state.stages} isBoss={this.isBoss} />
        );
    }
}

const Stage = (props) => {
    // let auras = Object.keys(props.auras);
    // let mobs = Object.keys(props.mobs);
    let is_boss = props.isBoss(props.stage.mobs);
    console.log(is_boss, props.stage);
    return (
        <div className={"stage" + (is_boss ? ' gold' : '')} >
            {is_boss ? <span className="stage-boss">Boss</span> : ''}
            <div className="stage-id">{props.stage.id}</div>
            <div className="stage-body">
                <div>{!!props.auras_id ? props.aura.name : ''}</div>
                <div>{!!props.mobs_id ? props.mob.name : ''}</div>
            </div>
        </div>
    )
}

const StageList = (props) => {
    return (
        <div>
            {props.stages.map((stage, i) => <Stage key={i} stage={stage} isBoss={props.isBoss} />)}
        </div>
    )
}

const Aura = (props) => {
    return (
        <div className="aura">
        </div>   
    )
}

const Mob = (props) => {
    console.log(props)
    return (
        <div className="mob">
        </div>
    )
}

export default EndlessTower;

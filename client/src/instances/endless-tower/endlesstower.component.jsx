import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './endlesstower.css';

class EndlessTower extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endlesstower: []
        };
    }

    componentDidMount() {
        this.EndlessTowerStages();
    }

    EndlessTowerStages() {
        fetch('http://localhost:7475/endless')
        .then( (results) => results.json())
        .then(data => {
            let stages = data.map( (stages, index, array) => {
                // console.log(stages.mob);
               return ( 
                           <tr key={index}>
                       {(index > 1 && array[index-1].stage_id === stages.stage_id) ? <td></td> : <td>{stages.stage_id}</td>}
                               <td>{stages && stages.mob && stages.mob.name}</td>
                               <td>{stages && stages.mob && stages.mob.mob_type && stages.mob.mob_type.type}</td>
                               <td>{stages && stages.aura && stages.aura.name}</td>
                               <td>{stages && stages.stage.details}</td>
                           </tr>
                )
            });
            this.setState({ stages: stages});
        });
    }

    render() {
        return (
            <div>
                <h3>Endless Tower</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Mob</th>
                        <th>Type</th>
                        <th>Aura</th>
                        <th>Stage Details</th>
                    </tr>
                </thead>
                <tbody>{this.state.stages}</tbody>
            </Table>
            </div>
        );
    }
}

export default EndlessTower;

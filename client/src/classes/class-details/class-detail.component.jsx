import React, { Component } from 'react'
import { Row, Clearfix } from 'react-bootstrap'
import SkillList from './skill-list.component'
import SubclassList from './subclass-list.component'
import './class-detail.css'

class ClassDetails extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        this.getClassDetails()
    }

    getClassDetails() {
        fetch(this.props.api + this.props.location.pathname)
        .then( (results) => results.json())
        .then(results => {
            results.data[0].skills = this.groupSkillByType(results.data[0].skills);
            this.setState({data: results.data});
        });
    }

    groupSkillByType = function(arr) {
        let groups = {};
    
        for(var element in arr){
            if (groups.hasOwnProperty(arr[element].type)) {
                groups[arr[element].type].push(arr[element]);
            } else {
                groups[arr[element].type] = [];
                groups[arr[element].type].push(arr[element]);
            }
        }
    
        return groups;
    }

    groupSkillsInColumns = function(obj) {
        let key = 0;
        let columns = [];

        for(var pos in obj) {
            if (pos % 3 === 0) {
                columns.push(
                    <Row key={key}>{obj.slice(pos,+pos+3)}</Row>
                );
                key++;
            }
        };
        return columns;
    }

    render(){
        if(this.state.data.length) {
            return(
                <div className="cover">
                    <div className="cover-image" style={{ backgroundImage: "url(" + this.props.staticData[this.props.match.params.classid]['image'] + ")" }}>
                        <div className="class-name">- {!!this.state.data[0] ? this.state.data[0].name : '' } -</div>
                    </div>
                    <Clearfix />
                    <SubclassList subclasses={!!this.state.data[0] ? this.state.data[0].subclasses : ''}/>
                    <SkillList skills={!!this.state.data[0] ? this.state.data[0].skills : ''} groupByColumns={this.groupSkillsInColumns} />
                </div>
            )
        }
        return null;
    }
}

export default ClassDetails
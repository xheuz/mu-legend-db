import React from 'react';
import Skill from './skill.component';

const SkillList = (props) => {
    return (
        <div className="skill-section">
            <h4 className="skill-type">Weapon Skills</h4>
            {props.groupByColumns(props.skills['Weapon'].map(skill => <Skill key={skill.id} {...skill} />))}
            <h4 className="skill-type">Class Skills</h4>
            {props.groupByColumns(props.skills['Class'].map(skill => <Skill key={skill.id} {...skill} />))}
            <h4 className="skill-type">Expert Skills</h4>
            {props.groupByColumns(props.skills['Expert'].map(skill => <Skill key={skill.id} {...skill} />))}
        </div>
    )
}

export default SkillList
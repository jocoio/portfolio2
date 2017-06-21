import React from 'react';
import Title from '.././common/Title.js';
import Description from  '../common/Description.js';

class WorkPage extends React.Component {
    render() {
        return (
            <div className="pageContainer">
            <Title name="Design"/>
            <Description info=""/>
            <Title name="Code"/>
            <Description info=""/>
            <Title name="Photo"/>
            <Description info=""/>
            <Title name="Video"/>
            <Description info=""/>
            </div>
        )
    }
}

export default WorkPage;

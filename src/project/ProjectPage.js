import React from 'react';
import Title from '.././common/Title.js';

class ProjectPage extends React.Component {
    
    render() {
        console.log(this.props.location);
        return (
            <div className="pageContainer">
                <Title name="Test"/>
            </div>
        )
    }
}

export default ProjectPage;
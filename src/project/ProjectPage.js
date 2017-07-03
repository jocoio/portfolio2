import React from 'react';
import Title from '.././common/Title.js';
import Description from '.././common/Description.js';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';

class ProjectPage extends React.Component {
    
    render() {

        var project = this.props.location.state.data;
        var back = this.props.location.state.back;

        return (
            <Row>
                <Col xsWidth={12} smWidth={4} mdWidth={4} lgWidth={4}>
                    <Title name={project.name}/>
                    <Description info={project.info}
                                 width={[12, 12, 12, 12]}
                    />
                    <div>{project.category}</div>
                    <div>{project.date}</div>
                    <Link to={back}>back</Link>
                </Col>
            </Row>
        )
    }
}

export default ProjectPage;
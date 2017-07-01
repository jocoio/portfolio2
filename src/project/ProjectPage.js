import React from 'react';
import Title from '.././common/Title.js';
import Description from '.././common/Description.js';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';

class ProjectPage extends React.Component {
    
    render() {

        console.log(this.props.location.state.data);
        var project = this.props.location.state.data;
        var back = this.props.location.state.back;

        return (
            <Row>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Title name={project.name}/>
                    <Description info={project.info}/>
                    <div>{project.category}</div>
                    <div>{project.date}</div>
                    <Link to={back}>back</Link>
                </Col>
            </Row>
        )
    }
}

export default ProjectPage;
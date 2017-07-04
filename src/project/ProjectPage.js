import React from 'react';
import Title from '.././common/Title.js';
import Description from '.././common/Description.js';
import cross from '../images/nav/cross.png';
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col } from '../grid';

class ProjectPage extends React.Component {

    render() {
        
        var project = this.props.location.state.data;
        var back = this.props.location.state.back;
        console.log(back);
        var rowStyles = {
            paddingTop: "80px"
        }
        var infoStyles = {
            position: "fixed"
        }
        return (
            <Row style={rowStyles}>
                <Col style={infoStyles} lgWidth={3} mdWidth={4} smWidth={4} xsWidth={10}
                    lgXOffset={0} mdXOffset={0} smXOffset={1} xsXOffset={1}>
                    <Title name={project.name} />
                    <Description info={project.info}
                        width={[12, 12, 12, 12]}
                    />
                    <h3>Category</h3>
                    
                    {project.category.map(function (listValue) {
                        return <p>{listValue}</p>;
                    })}
                    <h3>Date</h3>
                    <p>{project.date}</p>
                    <Link to={back}>
                        <img className="backCross" src={cross} alt="cross" />
                    </Link>
                </Col>
            </Row>
        )
    }
}

export default ProjectPage;
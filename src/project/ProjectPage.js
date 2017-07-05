import React from 'react';
import Title from '.././common/Title.js';
import Description from '.././common/Description.js';
import cross from '../images/nav/cross.png';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';


class ProjectPage extends React.Component {

    render() {
        var project = this.props.location.state.data;
        var back = this.props.location.state.back;

        var rowStyles = {
            paddingTop: "80px"
        }
        return (
            <Row style={rowStyles}>
                <Col className="projectInfo"
                    lgWidth={4} mdWidth={4} smWidth={4} xsWidth={10}
                    lgXOffset={0} mdXOffset={0} smXOffset={1} xsXOffset={1}>
                    <Title name={project.name} />
                    <Description info={project.info}
                        width={[3, 3, 3, 12]}
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
            

                <Col lgWidth={7} mdWidth={7} smWidth={5} xsWidth={12}
                     lgXOffset={5} mdXOffset={5} smXOffset={6} xsXOffset={0}
                     lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={11}
                     >
                    {/*{project.content.map(function (listValue) {
                        console.log(listValue);
                        var photo1 = require(`../images/work/design/helloLA/${listValue}`);
                        return (
                            
                            <img className="projectImage" src={photo1}/>
                        );
                    })}*/}
                    

                </Col>
            </Row>

        )
    }
}

export default ProjectPage;
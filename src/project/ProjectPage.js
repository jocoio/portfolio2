import React from 'react';
import Title from '.././common/Title.js';
import Description from '.././common/Description.js';
import cross from '../images/nav/cross.png';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';
import './ProjectPage.css';


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


                <Col className="projectContent" lgWidth={7} mdWidth={7} smWidth={5} xsWidth={12}
                    lgXOffset={5} mdXOffset={5} smXOffset={6} xsXOffset={0}
                    lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={15}
                >
                    {project.content.map(function (content) {
                        // Photo + caption
                        if (content.length === 2 ) {
                            var photoUrl= content[0];
                            var photo = require(`../images/projects/${photoUrl}`);
                            return (
                                <div>
                                    <br/>
                                    <img className="projectImage" src={photo} alt="content" />
                                    <p className="projectImageCaption">{content[1]}</p>
                                    <br/>
                                </div>
                            );
                            
                        }
                        // Video
                        else if (content.substr(0, 24) === "//www.youtube.com/embed/") {
                            return (
                                <div className="videoWrapper">
                                    <br/>
                                    <iframe width="1920" height="1080" src={content} title="video" frameBorder="0" allowFullScreen/>
                                    <br/>
                                </div>
                            )
                        }
                        // Photo
                        else if (content.substr(content.length - 3) === "gif" || 
                                 content.substr(content.length - 3) === "png" || 
                                 content.substr(content.length - 3) === "jpg")
                        {
                            photo = require(`../images/projects/${content}`);
                            return (
                                <div>
                                    <br/>
                                    <img className="projectImage" src={photo} alt="content" />
                                    <br/>
                                </div>
                            );
                        }
                        // Title
                        else if (content.length < 50) {
                            return (
                                <div className="projectContentTitle">
                                    <h2>{content}</h2>
                                    <br/>
                                </div>
                            )
                        }
                        // Text
                        else return (
                            <div>
                                <p>{content}</p>
                                <br/>
                            </div>);
                    })}
                </Col>
            </Row>

        )
    }
}

export default ProjectPage;
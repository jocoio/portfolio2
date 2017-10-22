import React from 'react';
import Title from '../common/Title.js';
import Description from '../common/Description.js';
import { Link } from 'react-router-dom';
import { Col, Row } from '../grid';
import './ProjectPage.css';
import projects from '../../data/projects.json';

class ProjectPage extends React.Component {

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        var rowStyles = {
            paddingTop: "80px",
            position: "relative"
        }
        var hundo = {
            width: "100%"
        }

        var linkTitle, link, back;
        var id = this.props.match.params.projectname; 
        var project = projects.results.find(item => item.id === id);
        
        if (project.link !== undefined) {
            linkTitle = <h3>Link</h3>;
            link = <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>;
        }

        if(this.props.location.state !== undefined) {
            back = this.props.location.state.back;
        }
        else back = "/";
        
        return (
            <div style={hundo}>
                <Row style={rowStyles}>
                    <Col className="projectInfo"
                        lgWidth={4} mdWidth={4} smWidth={4} xsWidth={10} xsXOffset={1}>
                        <Title name={project.name} />
                        <Description info={project.info}
                            width={[3, 3, 3, 12]}
                        />
                        <h3>Category</h3>
                        {project.category.map(function (listValue, idx) {
                            return <p key={idx}>{listValue}</p>;
                        })}

                        <h3>Date</h3>
                        <p>{project.date}</p>
                        
                        {linkTitle}
                        {link}

                        <Link to={back}>
                            <div className="backCross">×</div>
                        </Link>

                    </Col>

                    <Col className="projectContent" lgWidth={7} mdWidth={7} smWidth={7} xsWidth={12}
                        lgXOffset={5} mdXOffset={5} smXOffset={5} xsXOffset={0}
                        lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={15}
                    >
                        {project.content.map(function (content, idx) {
                            // Photo + caption
                            if (content.length === 2) {
                                var photoUrl = content[0];
                                var photo = require(`../../images/projects/${photoUrl}`);
                                return (
                                    <div key={idx}>
                                        <img className="projectImage" src={photo} alt="content" />
                                        <p className="projectImageCaption">{content[1]}</p>
                                        <br/>
                                    </div>
                                );
                            }
                            // Video
                            else if (content.substr(0, 24) === "//www.youtube.com/embed/") {
                                return (
                                    <div key={idx} className="videoWrapper">
                                        <br/>
                                        <iframe width="1920" height="1080" src={content} title="video" frameBorder="0" allowFullScreen />
                                        <br/>
                                    </div>
                                );
                            }
                            // Photo
                            else if (content.substr(content.length - 3) === "gif" || content.substr(content.length - 3) === "png" || content.substr(content.length - 3) === "jpg") {
                                photo = require(`../../images/projects/${content}`);
                                return (
                                    <div key={idx}>
                                        <br />
                                        <img className="projectImage" src={photo} alt="content" />
                                        <br />
                                    </div>
                                );
                            }
                            // Title
                            else if (content.length < 50) {
                                return <h2 className="projectContentTitle" key={idx}>{content}</h2>;
                            }
                            // Text
                            else return (
                                <div key={idx}>
                                    <p >{content}</p>
                                    <br />
                                </div>);
                        })}
                        <div className="footer" />
                    </Col>
                </Row>  
            </div>
        )
    }
}

export default ProjectPage;
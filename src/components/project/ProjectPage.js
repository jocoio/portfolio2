import React from "react";
import Description from "../common/Description.js";
import { Link } from "react-router-dom";
import { Col, Row } from "../grid";
import Category from "../common/Category";
import "./ProjectPage.css";
import projects from "../../data/projects.json";
import PhotoContainer from "../common/PhotoContainer";
import TextContainer from "../common/TextContainer";
import VideoContainer from "../common/VideoContainer";

class ProjectPage extends React.Component {

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    var rowStyles = {
      height: "min-content"
    };

    var linkTitle, link, category, photoURL;
    var id = this.props.match.params.projectname;
    var project = projects.results.find(item => item.id === id);

    // If there is a project link
    if (project.link !== undefined) {
      linkTitle = <h3 className="linkTitle">Link</h3>;
      link = (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      );
    }

    // Label change based on number of categories
    if (project.category.length > 1) category = "Categories";
    else category = "Category";

    return (
      <div className="pageWrapper">
        <Row style={rowStyles}>
          <Col
            className="projectTitle"
            lgWidth={10}
            mdWidth={10}
            smWidth={10}
            xsWidth={10}
            lgXOffset={1}
            mdXOffset={1}
            smXOffset={1}
            xsXOffset={1}
          >
            <h1>{project.name}</h1>
          </Col>
        </Row>
        <Row style={rowStyles}>
          <Col
            className="projectCategories"
            lgWidth={2}
            mdWidth={2}
            smWidth={2}
            xsWidth={5}
            lgXOffset={1}
            mdXOffset={1}
            smXOffset={1}
            xsXOffset={1}
            xsYOffset={0}
          >
            <h3>{category}</h3>

            {project.category.map(function (listValue, idx) {
              return <Category key={idx} category={listValue} />;
            })}
          </Col>
          <Col
            className="projectDescription"
            lgWidth={4}
            mdWidth={4}
            smWidth={4}
            xsWidth={10}
            lgXOffset={2}
            mdXOffset={2}
            smXOffset={2}
            xsXOffset={1}
            xsYOffset={6}
          >
            <Description info={project.info} />
          </Col>
          <Col
            className="projectInfo"
            lgWidth={2}
            mdWidth={2}
            smWidth={2}
            xsWidth={5}
            lgXOffset={3}
            mdXOffset={3}
            smXOffset={3}
            xsXOffset={6}
            xsYOffset={0}
          >
            <h3>Date</h3>
            <p>{project.date}</p>
            {linkTitle}
            {link}
            <Link to="/">
              <div className="backCross">×</div>
            </Link>
          </Col>
        </Row>
        <Row style={rowStyles} className="projectContent">
            {project.rowContent.map(function (rowContent, idx) {
              return (
                <Row style={rowStyles} className="projectRow">
                  {rowContent.map(function (content, idx) {
                    if (content[0] === "Photo") {
                      photoURL = require(`../../images/projects/${content[1]}`);
                      return <PhotoContainer 
                              img={photoURL}
                              width={[content[2][0], content[2][0], content[2][0], 12]} 
                              height={[content[2][1], content[2][1], content[2][1], content[2][1]]} 
                              x={[content[2][2], content[2][2], content[2][2], 0]} 
                              y={[content[2][3], content[2][3], content[2][3], 1]} 
                              z={[0, 0, 0, 0]} 
                              absolute={content[3]}
                              className="projectImage"/>;
                    }
                    else if (content[0] === "Text") {
                      return <TextContainer 
                              text={content[1]} 
                              width={[content[2][0], content[2][0], content[2][0], 3]} 
                              x={[content[2][1], content[2][1], content[2][1], 1]} 
                              y={[content[2][2], content[2][2], content[2][2], 1]} 
                              center={content[3]}
                              />;
                    }
                    else if (content[0] === "TitleAndText") {
                      return <TextContainer 
                              title={content[1]} 
                              text={content[2]}
                              width={[content[3][0], content[3][0], content[3][0], 10]} 
                              x={[content[3][1], content[3][1], content[3][1], 1]} 
                              y={[content[3][2], content[3][2], content[3][2], 1]} 
                              center={content[4]}
                              />;
                    }
                    else if (content[0] === "Video") {
                      return <VideoContainer 
                              url={content[1]}
                              width={[content[2][0], content[2][0], content[2][0], 10]} 
                              x={[content[2][1], content[2][1], content[2][1], 1]} 
                              y={[content[2][2], content[2][2], content[2][2], 1]} 
                              />;
                    }
                    else {
                      return <h1>Error</h1>
                    }
                  })}
                </Row>
            )})}
        </Row>
        <div className="footer" style={{ transform: "translateY(50%)", top: "50%" }}>
          <p>Coded by hand and made with <span role="img" aria-label="love">💚</span> In Boston, MA</p>
        </div>
      </div>
    );
  }
}

export default ProjectPage;

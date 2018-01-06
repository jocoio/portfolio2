import React from 'react';
import Description from '../common/Description.js';
import PhotoContainer from '../common/PhotoContainer.js';
import { Col, Row } from '../grid';

import me from '../../images/about/me.jpg';
import resume from '../../images/about/Resume.pdf';
import instagram from '../../images/about/instagram.svg';
import youtube from '../../images/about/youtube.svg';
import github from '../../images/about/github.svg';

import './AboutPage.css';


class AboutPage extends React.Component {
    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        var styles = {
            position: "relative",
            paddingTop: "80px",
        }

        var intro = [
            "I'm Jon, a Boston-based designer and developer with a soft spot for beautiful logos, well-documented code, and golden retrievers.",
            "I'm a Texan at heart, but am currently braving the elements at Northeastern University, majoring in Computer Science and Design. I love exploring the intersection of creativity and technology, and using design thinking to solve challenging problems.",
            "When I'm not glued to a screen, you can find me eating my way through Boston or running around the city trying to offset the ridiculous amount of food I just ate."
        ]

        return (
            <Row>
                <div style={styles}>
                    <Col xsWidth={10} smWidth={5} mdWidth={5} lgWidth={4}
                        lgXOffset={1} mdXOffset={0} smXOffset={0} xsXOffset={1}
                        lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={17}
                        className="content">
                        <h1>Hi There!</h1>
                        <Description info={intro}
                            width={[4, 5, 5, 12]}
                        />
                        <h3>Email</h3>
                        <a href="mailto:hello@joco.io?Subject=Hi there!">hello@joco.io</a>
                        <h3>Resume</h3>
                        <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>

                        
                        <div className="socialMedia">
                            <a className="social" href="http://www.instagram.com/joco.io" target="_blank" rel="noopener noreferrer">
                                <img id="insta" src={instagram} alt="instagram" />
                            </a>

                            <a className="social" href="http://www.youtube.com/corbeasta" target="_blank" rel="noopener noreferrer">
                                <img id="youtube" src={youtube} alt="youtube" />
				            </a>

                            <a className="social" href="http://www.github.com/jocoio" target="_blank" rel="noopener noreferrer">
                                <img id="git" src={github} alt="github" />
				            </a>
                        </div>

                        <div className="footer" />
                    </Col>

            <PhotoContainer x={[7, 7, 6, 0]}
                y={[0, 0, 0, 0]}
                z={[0, 0, 0, 0]}
                width={[4, 5, 5, 12]}
                height={[10, 10, 10, 14]}
                img={me}
                size="100%"
                className="aboutPhoto"
                absolute
            />
                </div >
            
            </Row >
        )
    }
}

export default AboutPage;

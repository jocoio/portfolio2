import React from 'react';
import Title from '.././common/Title.js';
import Description from '../common/Description.js';
import ContentContainer from '../common/ContentContainer.js';
import { Col, Row } from '../grid';

import me from '../../images/about/me.jpg';
import resume from '../../images/about/resume.pdf';
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
            "I'm Jon, a Boston-based designer and developer with a soft spot for beautiful logos, well-documented code, and golden retreivers.",
            "I'm a Texan at heart, but am currently braving the elements at Northeastern University, majoring in Computer Science and Design. I love exploring the intersection of creativity and technology, and using design thinking to solve challenging problems.",
            "Okay, thanks for stopping by!"
        ]

        return (
            <Row>
                <div style={styles}>
                    <Col xsWidth={10} smWidth={5} mdWidth={4} lgWidth={4}
                        lgXOffset={0} mdXOffset={1} smXOffset={1} xsXOffset={1}
                        lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={11}
                        className="content">
                        <Title name="Hi There!" />
                        <Description info={intro}
                            width={[4, 4, 4, 12]}
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

            <ContentContainer x={[7, 7, 6, 0]}
                y={[0, 0, 0, 0]}
                z={[0, 0, 0, 0]}
                width={[4, 4, 5, 12]}
                height={[10, 10, 10, 10]}
                img={me}
                size="100%"
                className="aboutPhoto"
            />
                </div >
            
            </Row >
        )
    }
}

export default AboutPage;

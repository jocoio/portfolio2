import React from 'react';
import Feature from '../common/Feature.js';
import features from '../../data/features.json';
import { Row, Col } from '../grid';
import ScrollAnimation from 'react-animate-on-scroll';
import "../../../node_modules/animate.css/animate.min.css";
import './HomePage.css';



class HomePage extends React.Component {

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>

                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Row className="landing">
                        <Col xsWidth>
                            <div className="intro">
                                <h1>Jon Corbett</h1>
                                <p>Boston based designer, developer, and dog lover</p>
                            </div>

                            <div className="icon-scroll" />
                        </Col>
                    </Row>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Feature data={features.la} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Feature data={features.ed} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Feature data={features.scout} />
                </ScrollAnimation>

            </div>
        )
    }
}

export default HomePage;

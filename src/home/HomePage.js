import React from 'react';
import Feature from '../common/Feature.js';
import features from '../features.json';
import arrow from '../images/nav/arrow.png';
import { Row, Col } from '../grid';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className="warning">
                    <p>This new site is currently under development, but is already feeling better than the previous version, so I'm releasing this a bit early. There's not much content, but feel free to drag the window around and watch things resize! That's about it at the moment! Okay thanks for stopping by! </p>
                </div>
                <Row className="landing">
                    <Col xsWidth >
                        <div className="intro">
                            <h1>Jon Corbett</h1>
                            <p>Boston based designer, developer, and dog lover</p>
                        </div>
                        <div className="actionCall">
                            <p>Scroll to see featured work</p>
                            <img className="arrow" src={arrow} alt="arrow" />
                        </div>
                    </Col>
                </Row>
                <Feature data={features.la} />
                <Feature data={features.ed} />
                <Feature data={features.scout} />
            </div>
        )
    }
}

export default HomePage;

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
                    <p>Testing! one, two, thr-- yikes! You've caught us in our  B E T A  // P H A S E! The content is here, but there's no animations, and we have a long way to go until this ship is ready to sail! But feel free to look around while we continue to set up! </p>
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

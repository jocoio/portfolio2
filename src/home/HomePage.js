import React from 'react';
import Feature from '../common/Feature.js';
import features from '../features.json';
import menu from '../images/laMenu.png';
import map from '../images/map.png';
import icons from '../images/icons.png';
import thumb from '../images/thumb.png';
import gparents from '../images/gparents.png';
import slide from '../images/slide.png';

import meeting from '../images/meeting.png';
import labs from '../images/labs.png';
import sclogo from '../images/sclogo.gif';

import { Row, Col } from '../grid';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xsWidth className="landing">
                        <div className="intro">
                            <h1>Jon Corbett</h1>
                            <p>Boston based designer, developer, and dog lover</p>
                        </div>
                    </Col>
                </Row>
                <Feature data={features.la} photo1={map} photo2={menu} photo3={icons}/>
                <Feature data={features.ed} photo1={slide} photo2={thumb} photo3={gparents}/>
                <Feature data={features.scout} photo1={sclogo} photo2={labs} photo3={meeting}/>        
            </div>
        )
    }
}

export default HomePage;

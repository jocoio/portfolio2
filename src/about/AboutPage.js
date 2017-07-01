import React from 'react';
import Title from '.././common/Title.js';
import Description from  '../common/Description.js';
import { Row, Col } from '../grid';

class AboutPage extends React.Component {
    render() {
        return (
            <Row>
                <Col xsWidth={12} smWidth={4} mdWidth={4} lgWidth={4}>
                    <Title name="Hi There!"/>
                    <Description info="I'm Jon, a Boston-based designer and developer with a soft spot for beautiful logos, well-documented code, and golden retreivers. I'm a Texan at heart, but am currently braving the elements at Northeastern University, majoring in Computer Science and Graphic Design. I love exploring the interseciton of creativity and technology, and using design thinking to solve challenging problems. If you want to reach out about employment, or to just say hello, feel free to get in touch !Okay, thanks for stopping by! Feel free to grab a resume on your way out!"/>
                </Col>
            </Row>
        )
    }
}

export default AboutPage;

import React from 'react';
import Title from '.././common/Title.js';
import Description from  '../common/Description.js';
import ContentContainer from '../common/ContentContainer.js';
import { Row, Col } from '../grid';
import me from '../images/about/me.png';

class AboutPage extends React.Component {
    
    render() {
        var styles = {
            height: "100vh",
            position: "relative",
            paddingTop: "100px"
        }
        return (
            <Row style={styles}>
                <Col xsWidth={10} smWidth={4} mdWidth={4} lgWidth={4}
                     xsXOffset={1} smXOffset={1} mdXOffset={1} lgXOffset={1}
                     lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={3}>
                    <Title name="Hi There!"/>
                    <Description info="I'm Jon, a Boston-based designer and developer with a soft spot for beautiful logos, well-documented code, and golden retreivers. I'm a Texan at heart, but am currently braving the elements at Northeastern University, majoring in Computer Science and Graphic Design. I love exploring the interseciton of creativity and technology, and using design thinking to solve challenging problems. If you want to reach out about employment, or to just say hello, feel free to get in touch !Okay, thanks for stopping by! Feel free to grab a resume on your way out!"
                                 width={[12, 12, 12, 12]}
                    />
                </Col>
                <ContentContainer x={[7, 7, 7, 0]} 
                                  y={[0, 0, 0, 0]} 
                                  z={[0, 0, 0, 0]} 
                                  width={[4, 4, 4, 12]} 
                                  height={[6, 10, 10, 3]} 
                                  img={me} 
                                  size="100%"
                />
                
            </Row>
        )
    }
}

export default AboutPage;

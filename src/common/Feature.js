import React from 'react';
import Title from '../common/Title.js';
import ContentContainer from '../common/ContentContainer.js';
import Description from '../common/Description.js';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';

class Feature extends React.Component {

    render() {
        var rowStyles = {
            position: "relative",
            paddingTop: "80px"
        }
        var infoStyles = {
            maxWidth: "250px"
        }

        var content1 = this.props.data.feature1;
        var content2 = this.props.data.feature2;
        var content3 = this.props.data.feature3;

        var photo1 = require(`../images/features/${content1.url}`);
        var photo2 = require(`../images/features/${content2.url}`);
        var photo3 = require(`../images/features/${content3.url}`);

        return (
            <Row style={rowStyles}>
                <Col xsWidth={10} smWidth={4} mdWidth={3} lgWidth={4}
                     xsXOffset={1} smXOffset={1} mdXOffset={0} lgXOffset={0}
                     xsYOffset={9}>
                    <Title name={this.props.data.name} />
                    <Description style={infoStyles} info={this.props.data.info}
                                 width={[3, 3, 4, 12]}
                    />
                    <Link className={"actionButton"} 
                        to={{ 
                            pathname: '/project',
                            state: { 
                                data : this.props.data,
                                back : "/#test"
                            }
                        }}>See More
                    </Link>
                </Col>
                <ContentContainer x={content1.x} y={content1.y} z={content1.z} width={content1.width} height={content1.height} img={photo1} size="100%" />
                <ContentContainer x={content2.x} y={content2.y} z={content2.z} width={content2.width} height={content2.height} img={photo2} size="100%" />
                <ContentContainer x={content3.x} y={content3.y} z={content3.z} width={content3.width} height={content3.height} img={photo3} size="100%" />
            </Row>
        )
    }
}

export default Feature;
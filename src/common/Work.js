import React from 'react';
import Title from '../common/Title.js';
import ContentContainer from '../common/ContentContainer.js';
import Description from '../common/Description.js';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';

class Feature extends React.Component {

    render() {
        var styles = {
            height: "100vh",
            position: "relative",
            paddingTop: "100px"
        }

        var content1 = this.props.data.work1;
        var content2 = this.props.data.work2;
        var content3 = this.props.data.work3;

        var photo1 = require(`../images/work/${content1.url}`);
        var photo2 = require(`../images/work/${content2.url}`);
        var photo3 = require(`../images/work/${content3.url}`);

        return (
            <Row style={styles}>
                <Col xsWidth={10} smWidth={4} mdWidth={3} lgWidth={3}
                     xsXOffset={1} smXOffset={1} mdXOffset={0} lgXOffset={0}
                     xsYOffset={3}>
                    <Title name={this.props.data.name} />
                    <Description info={this.props.data.info}
                                 width={[12, 12, 12, 12]}
                    />
                    {/*<Link className={"actionButton"} 
                        to={{ 
                            pathname: '/project',
                            state: { 
                                data : this.props.data,
                                back : "/"
                            }
                        }}>See More
                    </Link>*/}
                </Col>
                <ContentContainer x={content1.x} y={content1.y} z={content1.z} width={content1.width} height={content1.height} img={photo1} size="100%" />
                <ContentContainer x={content2.x} y={content2.y} z={content2.z} width={content2.width} height={content2.height} img={photo2} size="100%" />
                <ContentContainer x={content3.x} y={content3.y} z={content3.z} width={content3.width} height={content3.height} img={photo3} size="100%" />
            </Row>
        )
    }
}

export default Feature;
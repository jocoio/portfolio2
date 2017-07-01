import React from 'react';
import Title from '../common/Title.js';
import ContentContainer from '../common/ContentContainer.js';
import Description from '../common/Description.js';
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-flexbox-grid';

class Feature extends React.Component {

    render() {
        var styles = {
            height: "100vh",
            position: "relative"
        }

        var photo1 = this.props.data.photo1;
        var photo2 = this.props.data.photo2;
        var photo3 = this.props.data.photo3;

        return (
            <Row style={styles}>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Title name={this.props.data.name} />
                    <Description info={this.props.data.info} />
                    <Link className={"actionButton"} 
                        to={{ pathname: '/project',
                            state: { 
                                data : this.props.data,
                                back : "/"
                            }
                    }}>See More</Link>
                </Col>
                <ContentContainer x={photo1.x} y={photo1.y} width={photo1.width} height={photo1.height} img={this.props.photo1} size="200%" />
                <ContentContainer x={photo2.x} y={photo2.y} width={photo2.width} height={photo2.height} img={this.props.photo2} size="100%" />
                <ContentContainer x={photo3.x} y={photo3.y} width={photo3.width} height={photo3.height} img={this.props.photo3} size="100%" />
            </Row>
        )
    }
}

export default Feature;
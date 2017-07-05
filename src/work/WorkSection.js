import React from 'react';
import Title from '../common/Title.js';
import Project from './Project.js'

import Description from '../common/Description.js';
import { Row, Col } from '../grid';

class WorkSection extends React.Component {

    render() {
        var styles = {
            height: "100vh",
            position: "relative",
            paddingTop: "80px"
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
                     xsYOffset={10}>
                    <Title name={this.props.data.name} />
                    <Description info={this.props.data.info}
                                 width={[3, 3, 4, 12]}
                    />
                </Col>
                <Project content={this.props.data.work1} photo={photo1}/>
                <Project content={this.props.data.work2} photo={photo2}/>
                <Project content={this.props.data.work3} photo={photo3}/>
            </Row>
        )
    }
}

export default WorkSection;
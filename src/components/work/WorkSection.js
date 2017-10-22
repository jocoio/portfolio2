import React from 'react';
import Title from '../common/Title.js';
import ContentContainer from '../common/ContentContainer.js';
import Description from '../common/Description.js';
import { Row, Col } from '../grid';
import projects from '../../data/projects.json';

export default class WorkSection extends React.Component {

    render() {
        var styles = {
            height: "100vh",
            position: "relative",
            paddingTop: "80px"
        }

        var colStyles = {
            position: "absolute",
        }


        var content1 = projects.results[this.props.data[0]];
        var content2 = projects.results[this.props.data[1]];
        var content3 = projects.results[this.props.data[2]];

        var photo1 = require(`../../images/projects/${content1.url}`);
        var photo2 = require(`../../images/projects/${content2.url}`);
        var photo3 = require(`../../images/projects/${content3.url}`);

        return (
            <Row style={styles}>

                <Col xsWidth={10} smWidth={4} mdWidth={3} lgWidth={3}
                    xsXOffset={1} smXOffset={1} mdXOffset={0} lgXOffset={0}
                    xsYOffset={0}
                    style={colStyles}>
                    <Title name={this.props.name} />
                    <Description info={this.props.info}
                        width={[3, 3, 4, 12]}
                    />
                </Col>

                 <ContentContainer x={content1.x} y={content1.y} z={content1.z} width={content1.width} height={content1.height} img={photo1} label={content1.label} id={content1.id} size="100%" className="workProject"/>
        
                <ContentContainer x={content2.x} y={content2.y} z={content2.z} width={content2.width} height={content2.height} img={photo2} label={content2.label} id={content2.id} size="100%" className="workProject"/>
                <ContentContainer x={content3.x} y={content3.y} z={content3.z} width={content3.width} height={content3.height} img={photo3} label={content3.label} id={content3.id} size="100%" className="workProject"/>
            </Row>

        )
    }
}
import React from 'react';
import { Col } from '../grid';


class Description extends React.Component {

    render() {
        var divStyle = {
            marginBottom: "25px",
            marginTop: "0px",
        };
        return (
            <Col style={divStyle} 
                 lgWidth={this.props.width[0]} mdWidth={this.props.width[1]} smWidth={this.props.width[2]} xsWidth={this.props.width[3]}>
                <p>{this.props.info}</p>
            </Col>
        );
    }
}

export default Description;
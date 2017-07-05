import React from 'react';
import { Col } from '../grid';

class Description extends React.Component {

    render() {
        var divStyle = {
            marginBottom: "25px",
            marginTop: "0px",
        };
        var text;

        if(Array.isArray(this.props.info)) {
            text=this.props.info.map(function (listValue) {
                    return <div><p>{listValue}</p><br/></div>;
                });
        }
        else {
            text= <p>{this.props.info}</p>;
        }
        return (
            <Col style={divStyle}
                lgWidth={this.props.width[0]}
                mdWidth={this.props.width[1]}
                smWidth={this.props.width[2]}
                xsWidth={this.props.width[3]}
            >
                {text}
            </Col>
        );
    }
}

export default Description;
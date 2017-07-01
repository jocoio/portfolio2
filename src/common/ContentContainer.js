import React from 'react';
import { Col } from 'react-flexbox-grid';



class ContentContainer extends React.Component {

    render() {
        var styles = {
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
            borderRadius: "2px",
            top: this.props.y,
            height: this.props.height,
            background: "url(" + this.props.img + ") no-repeat center center",
            backgroundSize: "100%",
            position: "absolute"
        }
        return (
            <Col xs={this.props.width[3]} sm={this.props.width[2]} md={this.props.width[1]} lg={this.props.width[0]}
                 xsOffset={this.props.x[3]} smOffset={this.props.x[2]} mdOffset={this.props.x[1]} lgOffset={this.props.x[0]} style={styles}/>
        );
    }
}

export default ContentContainer;
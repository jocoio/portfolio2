import React from 'react';
import { Col } from '../grid';



class ContentContainer extends React.Component {

    render() {
        var styles = {
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
            borderRadius: "2px",
            top: this.props.y,
            background: "url(" + this.props.img + ") no-repeat center center",
            backgroundSize: "cover",
            position: "absolute"
        }
        return (
            <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                 xsHeight={this.props.height[3]} smHeight={this.props.height[2]} mdHeight={this.props.height[1]} lgHeight={this.props.height[0]}
                 xsOffset={this.props.x[3]} smOffset={this.props.x[2]} mdOffset={this.props.x[1]} lgOffset={this.props.x[0]} 
                 style={styles}/>
        );
    }
}

export default ContentContainer;
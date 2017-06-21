import React from 'react';



class ContentContainer extends React.Component {

    render() {
        var styles = {
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
            borderRadius: "2px",
            position: "absolute",
            left: this.props.x,
            top: this.props.y,
            width: this.props.width,
            height: this.props.height,
            background: "url(" + this.props.img + ") no-repeat center center",
            backgroundSize: this.props.size
        }
        return (
            <div style={styles}/>
        );
    }
}

export default ContentContainer;
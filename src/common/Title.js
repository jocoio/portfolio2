import React from 'react';

const divStyle = {
  maxWidth: 341
};

class Title extends React.Component {
    
    render() {
        return (
            <h1 style={divStyle}>{this.props.name}</h1>
        );
    }
}

export default Title;
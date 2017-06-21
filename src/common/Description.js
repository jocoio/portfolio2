import React from 'react';

const divStyle = {
  maxWidth: 250
};

class Description extends React.Component {
    
    render() {
        return (
            <p style={divStyle}>{this.props.info}</p>
        );
    }
}

export default Description;
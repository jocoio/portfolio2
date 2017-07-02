import React from 'react';

const divStyle = {
  width: 250, 
  marginBottom: "25px",
  marginTop: "0px"
};

class Description extends React.Component {
    
    render() {
        return (
            <p style={divStyle}>{this.props.info}</p>
        );
    }
}

export default Description;
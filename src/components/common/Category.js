import React from 'react';

class Category extends React.Component {
    


    render() {
        var categoryStyles = {
            fontSize: "12px",
            fontWeight: "400",
            textDecoration: "none",
            color: "#23966c",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "#23966c",
            padding: "4px",
            transition: "all, 150ms",
            width: "min-content",
            display: "inline-block",
            margin: "0px 5px 5px 0px",
            whiteSpace: "nowrap"
        }

        return (
            <p style={categoryStyles}>{this.props.category}</p>
        );
    }
}

export default Category;
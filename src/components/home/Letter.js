import React from 'react';
import o from '../../images/home/o.svg';
import j from '../../images/home/j.svg';
import c from '../../images/home/c.svg';

export default class Letter extends React.Component {

    render() {
        var styles = {
            height: "30px",
            position: "absolute",
            transform: "rotate(" + this.props.data[3] + "deg)",
            left: this.props.data[0] - 15,
            top: this.props.data[1] - 15,
            opacity: (this.props.data[0] + this.props.data[1]) / 4000
        }

        if (this.props.data[2] === 0) {
            return <img src={j} style={styles} alt="j" className="letter"/>;
        }
        else if (this.props.data[2] === 2) { 
            return <img src={c} style={styles} alt="c" className="letter"/>;
        }
        else { 
            return <img src={o} style={styles} alt="o" className="letter"/>;
        }
    }
}
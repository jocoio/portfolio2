import React from 'react';
import './Curtain.css';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Curtain extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            color: "#32b67a"
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.visibility,
            color: nextProps.color
        })
    }

    componentWillMount() {
        this.setState({
            show: this.props.visibility && true
        })
    }

    render() {
        const { show, color } = this.state;
        return (
            <div >
                <CSSTransition
                    in={show}
                    timeout={300}
                    unmountOnExit
                    classNames="curtain"
                >
                {state => (
                    <div style={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: color,
                        position: "fixed",
                        zIndex: 6,
                    }}
                    />
                )}
                </CSSTransition>
            </div>
        );
    }
}

Curtain.propTypes = {
    visibility: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired
};

// This is important, get the global state and assigns to a prop called visibility
const mapStateToProps = state => ({
    visibility: state.curtain.visibility,
    color: state.curtain.color
})

export default connect(mapStateToProps)(Curtain);
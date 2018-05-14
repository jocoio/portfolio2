import React from 'react';
import './Curtain.css';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Curtain extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.visibility
        })
    }

    componentWillMount() {
        this.setState({
            show: this.props.visibility && true
        })
    }

    render() {
        const { show } = this.state;
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
                        backgroundColor: "#32b67a",
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
    visibility: PropTypes.bool.isRequired
};

// This is important, get the global state and assigns to a prop called visibility
const mapStateToProps = state => ({
    visibility: state.curtain.visibility
})

export default connect(mapStateToProps)(Curtain);
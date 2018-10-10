import React from 'react';
import { Col } from '../grid';
import { Link } from 'react-router-dom';

// React Redux
import { connect } from 'react-redux';
import { curtainColor } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

class ProjectBlock extends React.Component {

    idToHex(id) {
        switch (id) {
            case "hellola":
                return "#DE5A16";
            case "portfolio":
                return "#222222";
            case "scoutsite":
                return "#00A4B7";
            case "scout":
                return "#00A4B7";
            case "unsize":
                return "#0B37F5";
            case "thisgirlcodes":
                return "#FDE568"
            case "myhousing":
                return "#FF3333";
            default:
                return "#32B67A";
        }
    }

    render() {
        var content = this.props.data;
        var photo = require(`../../images/projects/${content.url}`);

        var blockStyles = {
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
            borderRadius: "2px",
            background: "url(" + photo + ") no-repeat center center",
            position: "relative",
            margin: "5px",
        }

        return (
            <Link onClick={() => this.props.curtainColor(this.idToHex(content.id))}
                to={{
                    pathname: process.env.PUBLIC_URL + `/${content.id}`,
                    state: {
                        back: "/"
                    }
                }}
            >
                <Col xsWidth={12} smWidth={6} mdWidth={6} lgWidth={4}
                    xsHeight={3} smHeight={5} mdHeight={4} lgHeight={5}
                    style={blockStyles} className="projectBlock" >
                    <h3 className="contentLabel">{content.label}</h3>
                </Col>
            </Link>
        );
    }
}

ProjectBlock.propTypes = {
    curtainColor: PropTypes.func.isRequired
};

export default connect(null, { curtainColor })(ProjectBlock);
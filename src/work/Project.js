import React from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../common/ContentContainer.js';

class Project extends React.Component {
        
    render() {

        var content = this.props.content;
        var photo = this.props.photo;


        return (
            <Link to={{
                pathname: '/project',
                state: {
                    data: content,
                    back: "/work"
                }
            }}>
                <ContentContainer x={content.x} y={content.y} z={content.z} width={content.width} height={content.height} img={photo} label={content.label} size="100%" />
            </Link>
        )
    }

}

export default Project;
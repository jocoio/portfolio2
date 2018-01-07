import React from 'react';
import PhotoContainer from '../common/PhotoContainer';
import Tilt from 'react-tilt';


export default class ProjectBlock extends React.Component {

    render() {
        var content = this.props.data;
        var photo = require(`../../images/projects/${content.url}`);

        return (
            <Tilt className="Tilt" options={{ reverse: true, scale: 1, max : 25, perspective: 1000 }} >
                <PhotoContainer width={[4,6,6,12]} height={[5,4,5,3]} img={photo} size="100%" label={content.label} id={content.id}/>
            </Tilt>
        );
    }
}
import React from 'react';
import PhotoContainer from '../common/PhotoContainer';

export default class ProjectBlock extends React.Component {

    render() {
        var content = this.props.data;
        var photo = require(`../../images/projects/${content.url}`);

        return (
            <PhotoContainer width={[4,6,6,12]} height={[5,4,5,3]} img={photo} size="100%" label={content.label} id={content.id}>
            </PhotoContainer>
        );
    }
}
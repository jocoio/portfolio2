import React from 'react';
import ContentContainer from '../common/ContentContainer';

export default class ProjectBlock extends React.Component {

    render() {
        var content = this.props.data;
        var photo = require(`../../images/projects/${content.url}`);

        return (
            <ContentContainer width={[4,3,6,12]} height={[5,4,5,3]} img={photo} size="100%" label={content.label} id={content.id}>
            </ContentContainer>
        );
    }
}
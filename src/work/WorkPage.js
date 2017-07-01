import React from 'react';
import Title from '.././common/Title.js';
import Description from  '../common/Description.js';
import { Grid, Row } from 'react-flexbox-grid';
import ContentContainer from '../common/ContentContainer';

class WorkPage extends React.Component {
    render() {
        return (
            <Grid>
                <Row>  
                    <ContentContainer/>
                    <ContentContainer/>
                    <ContentContainer/>
                    <ContentContainer/>
                    
                    <Title name="Design"/>
                    <Description info=""/>
                    <Title name="Code"/>
                    <Description info=""/>
                    <Title name="Photo"/>
                    <Description info=""/>
                    <Title name="Video"/>
                    <Description info=""/>
                </Row>
            </Grid>
        )
    }
}

export default WorkPage;

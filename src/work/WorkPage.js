import React from 'react';
import Title from '.././common/Title.js';
import Description from  '../common/Description.js';
import Feature from '../common/Feature.js';
import ContentContainer from '../common/ContentContainer';

import works from '../works.json';
import menu from '../images/laMenu.png';
import map from '../images/map.png';
import icons from '../images/icons.png';
import thumb from '../images/thumb.png';
import gparents from '../images/gparents.png';
import slide from '../images/slide.png';

import meeting from '../images/meeting.png';
import labs from '../images/labs.png';
import sclogo from '../images/sclogo.gif';

class WorkPage extends React.Component {
    render() {
        return (
            <div>  
                <Feature data={works.design} photo1={map} photo2={menu} photo3={icons}/>
                <Feature data={works.dev} photo1={slide} photo2={thumb} photo3={gparents}/>
                <Feature data={works.photo} photo1={sclogo} photo2={labs} photo3={meeting}/>
                <Feature data={works.video} photo1={sclogo} photo2={labs} photo3={meeting}/>    
            </div>    
        )
    }
}

export default WorkPage;

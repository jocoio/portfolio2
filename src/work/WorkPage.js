import React from 'react';
import works from '../works.json';
import WorkSection from './WorkSection.js';
import './WorkPage.css';

class WorkPage extends React.Component {
    render() {
        return (
            <div>  
                <WorkSection data={works.design}/>
                <WorkSection data={works.dev}/>
                <WorkSection data={works.photo}/>
                <WorkSection data={works.video}/>    
            </div>    
        )
    }
}

export default WorkPage;

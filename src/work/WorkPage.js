import React from 'react';
import works from '../works.json';
import Work from '../common/Work.js';

class WorkPage extends React.Component {
    render() {
        return (
            <div>  
                <Work data={works.design}/>
                <Work data={works.dev}/>
                <Work data={works.photo}/>
                <Work id="test" data={works.video}/>    
            </div>    
        )
    }
}

export default WorkPage;

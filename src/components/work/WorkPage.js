import React from 'react';
import works from '../../data/works.json';
import WorkSection from './WorkSection.js';
import './WorkPage.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "../../../node_modules/animate.css/animate.min.css";

class WorkPage extends React.Component {
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <WorkSection data={works.design} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <WorkSection data={works.dev} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <WorkSection data={works.photo} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <WorkSection data={works.video} />
                </ScrollAnimation>
            </div>
        )
    }
}

export default WorkPage;

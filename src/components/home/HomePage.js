import React from 'react';
import projects from '../../data/projects.json';
import './HomePage.css';
import Hero from './Hero';
import Feature from './Feature';
import ProjectList from './ProjectList';
import Footer from '../common/Footer';

class HomePage extends React.Component {

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home">
                <Hero/>
                <Feature data={projects.results[0]}/>
                <ProjectList/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;

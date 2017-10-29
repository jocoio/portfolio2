import React from 'react';
import projects from '../../data/projects.json';
import './HomePage.css';
import Hero from './Hero';
import Feature from '../common/Feature';
import ProjectList from './ProjectList';

class HomePage extends React.Component {

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    styles = {
        textAlign: "center",
        paddingTop: "50px"
    }

    render() {
        return (
            <div className="home">
                <Hero />
                <Feature data={projects.results[0]} />
                <ProjectList />
                <div className="footer" style={{ transform: "translateY(50%)", top: "50%" }}>
                    <p>Coded by hand and made with <span role="img" aria-label="love">💚</span> In Boston, MA</p>
                </div>
            </div>
        )
    }
}

export default HomePage;

import React from 'react'

// import projects from '../../data/projects.json';
import './HomePage.css';
import Hero from './Hero';
// import Feature from './Feature';
// import ProjectList from './ProjectList';
import Footer from '../common/Footer';

import withTransition from '../utils/withTransition'
import animate from '@jam3/gsap-promise'
import Expo from '@jam3/gsap-promise'
// import anime from 'animejs'

import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    animateIn() {
        return animate.fromTo(
          this.el,
          .25,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeOut,
          },
        )
      }
    
      animateOut() {
        return animate.to(this.el, .25, {
          autoAlpha: 0,
          y: 50,
          ease: Expo.easeOut,
        })
      }

  render() {
    return (
            <div className="absolute absolute--fill pt5 bg-white" ref={e => (this.el = e)}>
                <Hero/>
                {/* <Feature data={projects.results[0]}/> */}
                {/* <ProjectList/> */}
                <Footer/>
                <Link to="/hellola"><p>gello</p></Link>
                
            </div>
    )
  }
}

export default withTransition(HomePage)

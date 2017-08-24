import React from 'react';
import Feature from '../common/Feature.js';
import features from '../../data/features.json';
import { TweenMax, Expo, TimelineMax } from 'gsap';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Hero from './Hero.js';

class HomePage extends React.Component {

    componentDidMount() {
        //Only run the tilt animation on desktops
        if (window.innerWidth >= 1024) {
            this.initTilt();
        }
        // this.addAnimation(this.createRevealAnim);
    }
    componentWillEnter() {
        console.log("incoming");
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    initTilt() {

        var feature = $('.featureRow'), img1, img2, img3;
        var sxPos, syPos;

        feature.mousemove(function (e) {

            // x position in div: (e.pageX - $(this).offset().left)
            sxPos = (((e.pageX - $(this).offset().left) - ($(this).width() / 2)) / $(this).width()) * 10;
            syPos = -(((e.pageY - $(this).offset().top) - ($(this).height() / 2)) / $(this).height()) * 10;

            img1 = $(this).children().eq(1);
            img2 = $(this).children().eq(2);
            img3 = $(this).children().eq(3);

            //Image 1
            TweenMax.to(img1, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 500,
                transformOrigin: "right top -200",
                ease: Expo.easeOut
            });
            //Image 2
            TweenMax.to(img2, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 500,
                transformOrigin: "50% 50% -200",
                ease: Expo.easeOut
            });
            //Image 3
            TweenMax.to(img3, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 500,
                transformOrigin: "50% 50% -200",
                ease: Expo.easeOut
            });
        });

        feature.mouseleave(function (e) {

            //All images
            TweenMax.to([img1, img2, img3], .25, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 9999,
                transformOrigin: "center center -200",
                ease: Expo.easeOut
            });
        });
    };

    constructor(props) {
        super(props);
        this.state = { animate: false };
    }

    toggle = () => this.setState({ animate: !this.state.animate });
    onRestart = () => this.setState({ animate: false });

    render() {

        return (

            <div className="home">

                <Hero animate={this.state.animate} restart={this.state.restart} onRestart={this.onRestart} />

                <Feature data={features.scout} />
                <Feature data={features.la} />
                <Feature data={features.ed} />

                <div className="footer">
                    <Link className={"actionButton"}
                        to={{ pathname: '/work', }}>View all projects
            </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;

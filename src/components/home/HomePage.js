import React from 'react';
import Feature from '../common/Feature.js';
import features from '../../data/features.json';
import { Col } from '../grid';
import ScrollAnimation from 'react-animate-on-scroll';
import "../../../node_modules/animate.css/animate.min.css";
import './HomePage.css';
import { TweenLite, Expo } from 'gsap';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Letter from './Letter';

class HomePage extends React.Component {
    
    componentDidMount() {
        //Only run the tilt animation on desktops
        if ($('body').width() >= 1024) {
            this.initTilt();
        }
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

            console.log(img3.css('zIndex'));
            //Image 1
            TweenLite.to(img1, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 500,
                transformOrigin: "right top -200",
                ease: Expo.easeOut
            });
            //Image 2
            TweenLite.to(img2, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 500,
                transformOrigin: "50% 50% -200",
                ease: Expo.easeOut
            });
            //Image 3
            TweenLite.to(img3, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 500,
                transformOrigin: "50% 50% -200",
                ease: Expo.easeOut
            });
        });

        feature.mouseleave(function (e) {

            //All images
            TweenLite.to([img1, img2, img3], .25, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 9999,
                transformOrigin: "center center -200",
                ease: Expo.easeOut
            });
        });
    };

    renderPattern() {
        var pPoints = [];
        var letterStart = 0;
        var letter = letterStart;
        var jDegree = 45;
        var cDegree = 45;
        for(var y = 0; y < window.innerHeight / 40; y++) {
            for (var x = 0; x <= window.innerWidth / 40; x++) {
                if (((y % 2 === 0) && (x % 2 === 0)) || ((y % 2 === 1) && (x % 2 === 1))) {
                    if (letter === 0) {
                        pPoints.push([x * 40, y * 40, letter, jDegree]);
                        jDegree = (jDegree + 180) % 360;
                    }
                    else if (letter === 2) {
                        pPoints.push([x * 40, y * 40, letter, cDegree]);
                        cDegree += 180;
                    }
                    else {
                        pPoints.push([x * 40, y * 40, letter, 0]);
                    }
                    
                    letter = (letter + 1) % 4;
                }
            }
            letterStart = (letterStart + (((y + 1) % 2) + 1)) % 4;
            console.log(letterStart);
            letter = letterStart;
            cDegree += 270;
            jDegree += 270;
        }
        return pPoints;
    }

    render() {
        var pattern = this.renderPattern();
        return (
            <div className="home">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <div className="landing">
                        <div className="pattern">
                            {pattern.map(function (data) {
                                return <Letter data={data}/>;
                            })}
                        </div>
                        <Col xsWidth>
                            <div className="intro">
                                <h1>Jon Corbett</h1>
                                <p>Boston based designer, developer, and dog lover</p>
                            </div>
                            <div className="actionCall">
                                <p>Scroll to see featured work</p>
                                <div className="icon-scroll" />
                            </div>
                        </Col>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Feature data={features.la} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Feature data={features.ed} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Feature data={features.scout} />
                </ScrollAnimation>

                <div className="footer">
                    <Link className={"actionButton"}
                        to={{pathname: '/work',}}>View all projects
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;

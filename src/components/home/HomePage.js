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

    render() {
        return (
            <div className="home">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <div className="landing">
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

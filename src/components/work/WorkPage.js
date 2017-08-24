import React from 'react';
import works from '../../data/works.json';
import WorkSection from './WorkSection.js';
import { TweenLite, Expo } from 'gsap';
import $ from 'jquery';
import './WorkPage.css';


class WorkPage extends React.Component {
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        //Only run the tilt animation on desktops
        if ($('body').width() >= 1024) {
            this.initTilt();
        }
    }

    initTilt() {

        var project = $('.workProject'), label;
        var sxPos, syPos;

        project.mousemove(function (e) {
            // x position in div: (e.pageX - $(this).offset().left)
            sxPos = (((e.pageX - $(this).offset().left) - ($(this).width() / 2)) / $(this).width()) * 10;
            syPos = -(((e.pageY - $(this).offset().top) - ($(this).height() / 2)) / $(this).height()) * 10;

            label = $(this).children(":first");

            //Image
            TweenLite.to($(this), .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 750,
                transformOrigin: "center center -200",
                ease: Expo.easeOut
            });
            //Label
            TweenLite.to(label, .25, {
                rotationY: sxPos,
                rotationX: syPos,
                transformPerspective: 750,
                transformOrigin: "right top -300",
                ease: Expo.easeOut
            });
        });

        project.mouseleave(function (e) {

            //Image
            TweenLite.to($(this), .5, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 99999,
                transformOrigin: "center center -200",
                ease: Expo.easeOut
            });
            //Label
            TweenLite.to(label, .5, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 99999,
                transformOrigin: "center center -300",
                ease: Expo.easeOut
            });
        });
    };

    render() {
        var styler = {
            width: "100%"
        }

        return (
            <div style={styler}>
                <WorkSection data={works.design} />
                <WorkSection data={works.dev} />
                <WorkSection data={works.photo} />
                <WorkSection data={works.video} />
            </div>
        )
    }
}

export default WorkPage;

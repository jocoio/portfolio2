import React from 'react';
import WorkSection from './WorkSection.js';
import { TweenLite, Expo } from 'gsap';
import $ from 'jquery';
import './WorkPage.css';

class WorkPage extends React.Component {
    componentWillUnmount() {
        window.scrollTo(0, 0);
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
            //Image & Label return animation
            TweenLite.to([$(this), label], .5, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 99999,
                transformOrigin: "center center -200",
                ease: Expo.easeOut
            });
        });
    };

    render() {
        //Only run the tilt animation on desktops
        if ($('body').width() >= 1024) {
            this.initTilt();
        }

        var styler = {
            width: "100%"
        }

        return (
            <div style={styler}>
                <WorkSection data={[1,2,3]} name="Design" info="I picked up design about two years ago, creating snapchat geofilters for fun. However I soon realized how important of a problem solving tool it could be."/>
                <WorkSection data={[4,5,6]} name="Code" info="I started coding in high school, and this year marks 5 years. It's time-consuming, frustrating, and repetitive, but the reward from challenging myself and solving complex problems makes it worth it."/>
                <WorkSection data={[7,8,9]} name="Photo" info="I got my first camera in 2011. None of these photos are from 2011. Trust me, you don't want to see them. I love capturing the beauty of everyday life, and photography has become the perfect tool to do so."/>
                <WorkSection data={[10,11,12]} name="Video" info="I started playing around with video in 2014, and quickly discovered a strong passion for filmmaking. I haven't been able to do it as much as I want, but when I do it's one of my favorite outlets for creativity."/>
            </div>
        )
    }
}

export default WorkPage;

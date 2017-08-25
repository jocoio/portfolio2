import React from 'react';
import { TimelineLite } from 'gsap';
import Letter from './Letter';

export default class Hero extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this._count = 0;
    }

    renderPattern() {
        var pPoints = [];

        var letterStart = 0;
        var jDegreeStart = 45;
        var cDegreeStart = 225;

        var letter = letterStart;
        var jDegree = jDegreeStart;
        var cDegree = cDegreeStart;

        for (var y = 0; y < window.innerHeight / 40; y++) {
            for (var x = 0; x <= window.innerWidth / 40; x++) {
                if (((y % 2 === 0) && (x % 2 === 0)) || ((y % 2 === 1) && (x % 2 === 1))) {
                    if (letter === 0) {
                        pPoints.push([x * 40, y * 40, letter, jDegree]);
                        jDegree = (jDegree + 180) % 360;
                    }
                    else if (letter === 2) {
                        pPoints.push([x * 40, y * 40, letter, cDegree]);
                        cDegree = (jDegree + 180) % 360;
                    }
                    else {
                        pPoints.push([x * 40, y * 40, letter, 0]);
                    }

                    letter = (letter + 1) % 4;
                }
            }

            letterStart = (letterStart + (((y + 1) % 2) + 1)) % 4;
            jDegreeStart = (jDegreeStart + 270) % 360;
            cDegreeStart = (cDegreeStart + 270) % 360;

            letter = letterStart;
            jDegree = jDegreeStart;
            cDegree = cDegreeStart;
        }
        return pPoints;
    }

    componentDidMount() {
        this.heroTL = new TimelineLite({});
        this.heroTL.staggerFrom(this.intro.children, 1, { opacity: 0, transform: "translateY(15px)" }, .5);
        this.heroTL.staggerFrom(this.pattern.children, 1, { opacity: 0, scale: .3, transform: "rotate(-90deg)" }, .02)
        this.heroTL.staggerFrom(this.action.children, 1, { opacity: 0, transform: "translate(15px)" }, .2);
        this.heroTL.play();
    }

    componentDidUpdate(prevProps) {
        // Was there a change in the animate prop?
        if (prevProps.animate !== this.props.animate) {
            this.props.animate ? this.heroTL.resume() : this.heroTL.pause();
        }
        if (prevProps.restart !== this.props.restart && this.props.restart === true) {
            this.restart();
        }
    }

    restart = () => {
        this.heroTL.restart();
        this.heroTL.pause();
        this.props.onRestart();
    };

    render() {
        return (
            <div className="landing">
                <div name='pattern' ref={x => this.pattern = x} className="pattern">
                    {this.renderPattern().map(function (data, idx) {
                        return <Letter name={idx} data={data} key={idx}/>;
                    })}
                </div>
                <div name='intro' className="intro" ref={x => this.intro = x}>
                    <h1>Jon Corbett</h1>
                    <p>Boston based designer, developer, and dog lover</p>
                </div>
                <div name='action' className="actionCall" ref={x => this.action = x}>
                    <p>Scroll to see featured work</p>
                    <div className="icon-scroll" />
                </div>
            </div>
        );
    }
}
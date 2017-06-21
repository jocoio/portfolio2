import React from 'react';
import Feature from '../common/Feature.js';

class HomePage extends React.Component {
    render() {
        return (
            <div className="pageContainer">
                <Feature name="Hello LA" info="In February 2016 I attended my first hackathon, Hack@Brown. Working with LA locals, we created a curated guide to Los Angeles, and won best user experience out of ~100 teams."
                />
                <Feature name="50 Years: Ed and Laureen" info="In 2014 my grandparents, Ed and Laureen, celebrated their 50th wedding anniversary. As a large source of inspiration in my life, I wanted to capture their story. On a cold November day, I sat down with them and did just that."
                />
                <Feature name="Scout" info="In January 2016 I joined Northeastern’s on campus, student run design studio, Scout. From there, it’s been a wild ride of hard work, late nights, and lifelong friends. I’ve been lucky enough to wear several different hats while on Scout, so the following is a collection of some of my favorite work."
                />
            </div>
        )
    }
}

export default HomePage;

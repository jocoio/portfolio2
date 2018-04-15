import React from 'react';

export default class Hero extends React.Component {

    render() {
        return (
            <div className="landing">
                <div name='intro' className="intro" ref={x => this.intro = x}>
                    <p>Hi there! I'm</p>
                    <h1>Jon Corbett</h1>
                    <p>a Boston based designer and creative developer</p>
                </div>
            </div>
        );
    }
}
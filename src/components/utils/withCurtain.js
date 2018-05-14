import React, { Component } from 'react'

export default function withCurtain(WrappedComponent) {
  return class extends Component {

    // componentWillMount() {
    //   // Mainly for reseting the page, might be redundant
    //   this.props.toggleCurtainVisibility(true);
    // }

    // componentDidMount() {
    //   // Wait one second then remove the curtain
    //   setTimeout(() => { this.props.toggleCurtainVisibility(false) }, 1000);
    // }

    // componentWillUnmount() {
    //   // Throw the curtain up
    //   this.props.toggleCurtainVisibility(true);
    // }

    render() {
      return <WrappedComponent  {...this.props} />;
    }
  }
}



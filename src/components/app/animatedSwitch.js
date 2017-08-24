import React from "react";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";

export default class AnimatedSwitch extends Switch {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
	}
	componentWillAppear(cb) {
		console.log("componentWillAppear");
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			100
		);
		setTimeout(() => cb(), 100);
	}
	componentWillEnter(cb) {
		console.log("componentWillEnter");
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			100
		);
		cb();
		setTimeout(() => cb(), 1000);
	}
	componentWillLeave(cb) {
		console.log("componentWillLeave");
		Animated.spring(this.state.animate, { toValue: 0 }).start();
		setTimeout(() => cb(), 175);
		
	}
	render() {
		const style = {
			opacity: Animated.template`${this.state.animate}`,
			transform: Animated.template`
				translateY(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["12px", "0px"]
			})})
			`
		};
		return (
			<Animated.div style={style}>
				{super.render()}
			</Animated.div>
		);
	}
};

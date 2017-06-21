import React from 'react';
import Title from '../common/Title.js';
import ContentContainer from  '../common/ContentContainer.js';
import Description from  '../common/Description.js';
import { Link } from 'react-router';
import menu from '../images/laMenu.png';
import map from '../images/map.png';
import icons from '../images/icons.png'

class Feature extends React.Component {
    render() {
        var styles = {
            height: "100vh"
        }
    
        return (
            
            <div style={styles}>
                <Title name={this.props.name}/>
                <Description info={this.props.info}/>
                <Link className={"actionButton"} to="/project">See More</Link>
                <ContentContainer x={290} y={400} width={255} height={255} img={map} size="200%"/>
                <ContentContainer x={330} y={50} width={500} height={475} img={menu} size="100%"/>
                <ContentContainer x={580} y={259} width={423} height={84} img={icons} size="100%"/>
            </div>
        )
    }
}

export default Feature;
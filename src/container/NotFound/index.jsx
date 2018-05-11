import React from 'react'
const ASSET_PATH = process.env.ASSET_PATH || '/';
class NotFound extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	divCss:{'text-align': 'center','margin-top': '120px'},
	  	imgCss:{'width': '98px'},
        h1Css:{'margin-top': '24px'}//,'text-shadow':'black 0.1em 0.2em 0.2em'
	  };
	}
    render() {
    	const icon = ASSET_PATH + 'assets/sad.jpg'
        return (
            <div style={this.state.divCss}> 
            	<img style={this.state.imgCss} src={icon}/>
            	<h1 style={this.state.h1Css}>404 NOT FOUND</h1>
            </div>
        )
    }
}

export default NotFound
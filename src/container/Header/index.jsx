import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
	render(){
		return(
			<div class="tmc-header">
				<Link to={this.props.backPath} class="tmc-head-back"><i class="icon-back"></i></Link>
			    <p>{this.props.title}</p>
			</div>
		)
	}
}